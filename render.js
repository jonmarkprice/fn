// Super simplistic render mockup

/*
const testData = {
    name: 'map2',
    in:[ 
        { type: 'Fn', from: ['a', 'b'], to: 'c' },
        { type: 'Seq', of: 'a' },
        { type: 'Seq', of: 'b' }
    ],
    out: { type: 'Seq', of: 'c' },
    can_fail: false,
    aliases: [ 'zipWith' ],
    implementaions: [{ 
        name: 'head',
        namespace: [],
        eco: 'Ramda',
        url: 'rambdajs.com/docs/#zipWith'
    }, {
        name: 'head',
        namespace: [],
        eco: 'Haskell',
        url: 'http://hackage.haskell.org/package/base-4.11.0.0/docs/Data-List.html#v:zipWith'
    }, {
        name: 'hd',
        namespace: [],
        eco: 'OCaml',
        url: 'http://caml.inria.fr/pub/docs/manual-ocaml/libref/List.html#VALmap2'
    }]
};
*/
//console.log(testData.name);

function parseType(obj) {
    let res = "";
    if (obj.of !== undefined) {
        const typeclass = obj.type || "";
        const of_ = obj.of || "";
        
        res = typeclass + " " + of_;
    } else if (obj.from && obj.to) {
        const p = obj.from.join(", ");
        res = "(" + p + " -> " + obj.to + ")";
    }
    
    console.log(res)
    return res;
}

function parseImplementation(row) {
    return `
    <tr>
        <td>${row.name}</td>
        <td>${row.eco}</td>
        <td><a href="${row.url}">Link</a></td>
    </tr>
    `;
}

function createHTML(testData) {

    // console.log(testData)

    const aliases = testData.aliases.map(s => "<em>" + s + "</em>").join(', ');
    const renderType = "(" + testData.in.map(parseType).join(", ") + ") -> " + parseType(testData.out);
    const rows = testData.implementaions.map(parseImplementation).join("\n");

    // TODO can fail
    // TODO implementation
    let s = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>${testData.name}</title>
    </head>
    <body>
    <h1>${testData.name}</h1>
    <p>Also called: ${aliases}</p>
    <code>${renderType}</code>
    <table>${rows}</table>
    </body>
    </html>
    `
    
    // console.log(s)
    return s;
}

module.exports = { createHTML };