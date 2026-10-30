import re
import json
import sys

translationKeySourceArray = []
result = []
countTotal = 0
countSuccess = 0
countcount = 0
regex = re.compile(r"\"[a-z_]*\.[^\"\\]*\"")
contents = None


print("Input file name of a file to replace translation keys in")
fileToTranslate = input()
try:
    open(fileToTranslate)
except:
    print("Specified file cannot be opened")
    sys.exit()

print("Input file names of translation key source files one by one (enter after every name!) (example: en_us.json), after inputing filenames type run to run")
while True:
    translationKeySourceArray.append(input())
    if "run" in translationKeySourceArray:
        translationKeySourceArray.pop()
        break

with open(fileToTranslate, "r+", encoding="utf-8") as file:
    for line in file:
        regexTarget = regex.search(line)
        if regexTarget != None:
            countTotal = countTotal + 1



for x in translationKeySourceArray:
    try:
        with open(x) as translationKeySource:
            translationKey = json.load(translationKeySource)
    except:
        print("Error: Failed to open file " + x + " !")
    else:

        with open(fileToTranslate, "r+", encoding="utf-8") as file:
            contents = file.read()

        with open(fileToTranslate, "r+", encoding="utf-8") as file:
            for line in file:
                regexTarget = regex.search(line)
                if regexTarget != None:
                    for i in translationKey:
                        oldKey = regexTarget.group()[1:-1]
                        if oldKey == i:
                            print("changed "+ oldKey + " to " + translationKey[oldKey])
                            resolvedTranslationKey = (translationKey[oldKey])
                            contents = contents.replace(oldKey, resolvedTranslationKey)
                            countSuccess = countSuccess + 1
                        

        if contents != None:
            with open(fileToTranslate, "w", encoding="utf-8") as file:
                file.seek(0, 0)
                file.write(contents)
                print("Changed " + str(countSuccess) + " out of " + str(countTotal) + " total")
        else:
            print("Error: Cant write to file, because no changes were made")