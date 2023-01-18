class WordMatcher {
    constructor(words) {
        this.words = words;
    }

    static builder() {
        return new WordMatcherBuilder();
    }

    findMatches(pattern) {
        var matches = [];
        this.words.forEach(w => {
            pattern.split('').forEach((letter, index) => {
                if (pattern.length !== w.length) {
                    return;
                }
                if (letter !== '!' && letter !== w.charAt(index)) {
                    return;
                }
                if (index === pattern.length - 1) {
                    matches.push(w);
                }
            });
        });
        return matches;
    }
}

class WordMatcherBuilder {
    constructor() {
        this.words = [];
    }

    addWord(word) {
        this.words.push(word);
        return this;
    }

    build() {
        return new WordMatcher(this.words);
    }
}

const wordMatcher = WordMatcher.builder().addWord("apple").addWord("a").addWord("asple").addWord("asdeasda").build().findMatches("a!ple");
console.log(wordMatcher);
