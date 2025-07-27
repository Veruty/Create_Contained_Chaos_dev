//made by @minecraft.veteran in kubejs discord
const pendingRequests = [];
const REQUEST_TIMEOUT = 60 * 1000;
ServerEvents.commandRegistry((event) => {
  const { commands: Commands, arguments: Arguments } = event;
  event.register(
    Commands.literal("tpa")
      .then(
        Commands.literal("request").then(
          Commands.argument("target", Arguments.PLAYER.create(event)).executes(
            (c) =>
              requestTPA(
                c.source.player,
                Arguments.PLAYER.getResult(c, "target")
              )
          )
        )
      )
      .then(
        Commands.literal("accept").then(
          Commands.argument("target", Arguments.PLAYER.create(event)).executes(
            (c) =>
              acceptTPA(
                c.source.player,
                Arguments.PLAYER.getResult(c, "target")
              )
          )
        )
      )
      .then(
        Commands.literal("reject").then(
          Commands.argument("target", Arguments.PLAYER.create(event)).executes(
            (c) =>
              denyTPA(c.source.player, Arguments.PLAYER.getResult(c, "target"))
          )
        )
      )
      .then(
        Commands.literal("list").executes((c) =>
          listPendingRequests(c.source.player)
        )
      )
  );
});
// Send teleport request
let requestTPA = (player, target) => {
  let existing = pendingRequests.find(
    (request) =>
      request.to === target.username && request.from === player.username
  );
  let task = setTimeout(() => {
    let index = pendingRequests.findIndex(
      (request) =>
        request.to === target.username && request.from === player.username
    );
    if (index !== -1) {
      pendingRequests.splice(index, 1);
      player.tell(
        Text.red(`Your teleport request to ${target.username} has expired.`)
      );
    }
  }, REQUEST_TIMEOUT);
  if (existing) {
    existing.timeoutTask.cancel();
    existing.timeoutTask = task;
  } else {
    pendingRequests.push({
      to: target.username,
      from: player.username,
      timeoutTask: task,
    });
  }
  target.tell(
    Text.darkGreen(`${player.username}`)
      .append(Text.gold(" wants to teleport to you!\n"))
      .append(Text.gold("Do you want to "))
      .append(
        Text.green("[Accept]").clickRunCommand("/tpa accept " + player.username)
      )
      .append(
        Text.gold(" or ").append(
          Text.red("[Reject]").clickRunCommand("/tpa reject " + player.username)
        )
      )
  );
  player.tell(Text.gold(`Request sent to ${target.username}.`));
  return 1;
};
// Accept teleport request
let acceptTPA = (player, target) => {
  let index = pendingRequests.findIndex(
    (request) =>
      request.to === player.username && request.from === target.username
  );
  if (index === -1) {
    player.tell(Text.red("No teleport request from that player!"));
    return 0;
  }
  let request = pendingRequests[index];
  if (request.accepted) {
    player.tell(Text.red("This teleport request has already been accepted!"));
    return 0;
  }
  request.accepted = true;
  request.timeoutTask.cancel();
  target.displayClientMessage(
    Text.green(
      `Teleport request accepted! Teleporting to ${player.username} in 5 seconds...`
    ),
    true
  );
  player.displayClientMessage(
    Text.green(`${target.username} is being teleported to you in 5 seconds...`),
    true
  );
  let countdown = 5;
  setInterval(
    () => {
      if (countdown > 0) {
        target.displayClientMessage(
          Text.yellow(
            `Teleporting to ${player.username} in ${countdown} seconds...`
          ),
          true
        );
        player.displayClientMessage(
          Text.yellow(
            `${target.username} will arrive in ${countdown} seconds...`
          ),
          true
        );
      } else {
        target.teleportTo(player.level, player.x, player.y, player.z, [], 0, 0);
        target.displayClientMessage(
          Text.green("You have been teleported!"),
          true
        );
        player.displayClientMessage(
          Text.green(`${target.username} has been teleported to you!`),
          true
        );
        pendingRequests.splice(
          pendingRequests.findIndex(
            (request) =>
              request.to === target.username && request.from === player.username
          ),
          1
        );
      }
      countdown--;
    },
    1000,
    6
  );
  return 1;
};
let denyTPA = (player, target) => {
  const index = pendingRequests.findIndex(
    (request) =>
      request.to === player.username && request.from === target.username
  );
  if (index === -1) {
    player.tell(Text.red("No teleport request from that player!"));
    return 0;
  }
  pendingRequests[index].timeoutTask.cancel();
  pendingRequests.splice(index, 1);
  target.tell(Text.red(`${player.username} has denied your teleport request!`));
  player.tell(
    Text.green(`You denied the teleport request from ${target.username}.`)
  );
  return 1;
};
let listPendingRequests = (player) => {
  let requests = pendingRequests.filter(
    (request) => request.to === player.username
  );
  if (!requests || requests.length === 0) {
    player.tell(Text.red("No pending teleport requests!"));
    return 0;
  }
  player.tell(Text.gold("» Pending TPA requests «"));
  requests.forEach((request) => {
    let requesterName = request.from;
    let acceptButton = Text.green("[Accept]").clickRunCommand(
      `/tpa accept ${requesterName}`
    );
    let denyButton = Text.red("[Reject]").clickRunCommand(
      `/tpa reject ${requesterName}`
    );
    player.tell(
      Text.gold(`\n» `)
        .append(Text.darkGreen(requesterName))
        .append(Text.gold(` « `))
        .append(acceptButton)
        .append(Text.gold(" or "))
        .append(denyButton)
    );
  });
  return 1;
};
function setTimeout(callback, seconds) {
  const task = Utils.server.schedule(seconds, callback);
  return {
    cancel: () => task.clear(),
  };
}
function setInterval(callback, seconds, repeat) {
  let task = null;
  let count = 0;
  function run() {
    count++;
    callback();
    if (repeat !== undefined && count >= repeat) return;
    task = Utils.server.schedule(seconds, run);
  }
  task = Utils.server.schedule(seconds, run);
  return {
    cancel: () => task?.clear(),
  };
}