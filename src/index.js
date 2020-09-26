module.exports = function logger({ types: t }) {
  return {
    name: "fix-font-awesome",
    visitor: {
      ImportDeclaration(path) {
        if (!path.node.source.value.match(/^@fortawesome\/.+svg-icons$/gm)) {
          return;
        }

        path.replaceWithMultiple(
          path.node.specifiers.map((specifier) => {
            return t.ImportDeclaration(
              [
                t.ImportSpecifier(
                  t.Identifier(specifier.local.name),
                  t.Identifier(specifier.imported.name)
                ),
              ],
              t.stringLiteral(
                `${path.node.source.value}/${specifier.imported.name}`
              )
            );
          })
        );
      },
    },
  };
};
