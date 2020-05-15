+ textEditorTS is a word processing tool based on Sed from Unix SO.

+ Commands availables: 

    -[option] [Substitution command] [file]
     * options: -n, -i, -e
     * Substitution command: s/expreg/substitution string/flag
     * file: a .txt file is needed
     * flags availables: p,g,I,w

    -[option] [script] [file]
     * options: -f
     * script: a .sed file is needed
     * file: a .txt file is needed

+ Script content format:
    s/expreg/substitution string/flag
    s/expreg/substitution string/flag
    s/expreg/substitution string/flag

Known issues:
    You shoudn't use two or more options for one substitution commmand at the same time.
    Something like: node dist/index.js -n -e 's/o/0/' test.txt woundn't work!

Find some substitution commands you should try on: subscommands.txt
