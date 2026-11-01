#this replaces translation key it finds in 1st file that you specify with translations from jsons(can be multiple of them) that you specify in 2nd prompt

import re
import json
import sys

translationSourceArray = []
countTotal = 0
countSuccess = 0
contents = None

# this regex re.compile(r"\"[a-z_]*\.[^\"\\]*\"") should be fine for this, however it does find some things that look like translation keys, so feel free to change
regex = re.compile(r"\"[a-z_]*\.[^\"\\]*\"")

#file to replace keys to translations input field
print("Input file name of a file to replace translation keys in")
fileToReplaceKeysIn = input()
try:
    #not sure if it ever closes this file, hope its not critical lmao
    open(fileToReplaceKeysIn)
except:
    print("Error: Specified file cannot be opened")
    sys.exit()

#input field for files that contain translations for translation keys
print("Input file names of translation key source files one by one (enter after every name!) (example: en_us.json), after inputing filenames type run to run")
while True:
    translationSourceArray.append(input())
    if "run" in translationSourceArray:
        translationSourceArray.pop()
        break

#counter that counts how regex matches, not critical in the slightest
with open(fileToReplaceKeysIn, "r+", encoding="utf-8") as file:
    for line in file:
        regexTarget = regex.search(line)
        if regexTarget != None:
            countTotal = countTotal + 1

for x in translationSourceArray:
    try:
        with open(x) as translationKeySource:
            translationKey = json.load(translationKeySource)
    except:
        #will print error if any of the translation files cannot load, will continue to load other ones after that
        print("Error: Failed to open file " + x + " !")
    else:
        with open(fileToReplaceKeysIn, "r+", encoding="utf-8") as file:
            contents = file.read()
            #for some reason if contents = file.read() is put at with open below it will error?, no idea but had to read file another time
        with open(fileToReplaceKeysIn, "r+", encoding="utf-8") as file:
            for line in file:
                regexTarget = regex.search(line)
                if regexTarget != None:
                    for i in translationKey:
                        #regexTarget.group() will return translation key with "" cuz its specified in regex, [1:-1] strips it off first and last char so no ""
                        oldKey = regexTarget.group()[1:-1]
                        if oldKey == i:
                            #replacing translation keys with actual translations
                            resolvedTranslationKey = (translationKey[oldKey])
                            contents = contents.replace(oldKey, resolvedTranslationKey)
                            print("changed "+ oldKey + " to " + translationKey[oldKey])
                            countSuccess = countSuccess + 1
                        
        #writing to file
        if contents != None:
            with open(fileToReplaceKeysIn, "w", encoding="utf-8") as file:
                file.seek(0, 0)
                file.write(contents)
                print("Changed " + str(countSuccess) + " out of " + str(countTotal) + " total")
        else:
            #if contents wernt chainged for some reason error (might be no proper files that contain translations for translation keys specified)
            print("Error: Cant write to file, because no changes were made")