module.exports = [
    { "type": "docs", "scope": "README", "release": "patch" },
    { "type": "refactor", "scope": "core-*", "release": "minor" },
    { "type": "refactor", "release": "patch" },
    { "type": "major", "release": "major" },
    { "type": "minor", "release": "minor" },
    { "scope": "no-release", "release": false }
];
