const fs = require('fs').promises;
const path = require('path');

//read all files in thes folder
fs.readdir('./')
    //[ '1-modules1', '2-modules2', '3-npm', '4-fs and Mutual Recursion' ]
    .then(files => console.log(files))
    .catch(e => console.log(e));

//[ 'idex.js' ]
async function readddir(rootDir) {
    try {
        //path.resolve(__dirname) pick the path of this file
        rootDir = rootDir || path.resolve(__dirname);
        const files = await fs.readdir(rootDir);

        wallk(files, rootDir);
    } catch (error) {
        console.log(error.message);
    }

}

async function wallk(files, rootDir) {
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file)
        //pick the stats of file
        const stats = await fs.stat(fileFullPath)

        //verify if the paht of folder or file  have git
        if (/\.git/g.test(fileFullPath)) continue
        if (/node_modules/g.test(fileFullPath)) continue

        // vrify if this is a directory
        if (stats.isDirectory()) {
            readddir(fileFullPath)
            continue;
        }
        //  if file diference  of .css
        if (!/\.css$/g.test(fileFullPath)) continue

        //c:\Users\CAA224\Desktop\Estudos\CURSOJS\2-Landing page com HTML e CSS3\assets\css\classes.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\2-Landing page com HTML e CSS3\assets\css\elements.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\2-Landing page com HTML e CSS3\assets\css\menu.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\2-Landing page com HTML e CSS3\assets\css\styles.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\1-HTML e CSS\15-separando-html-e-css\css\15-separando-html-e-css.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\2-Landing page com HTML e CSS3\assets\css\variables.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\1-HTML e CSS\16-seletores-basicos-de-css-parte1\css\16-seletores-basicos-de-css-parte1.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\1-HTML e CSS\17-seletores-basicos-de-css-parte2\css\17-seletores-basicos-de-css-parte2.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\4-Programming logic\12-exercice nodeList\assets\css\style.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\1-HTML e CSS\18-pseudo-classes\css\18-pseudo-classes.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\1-HTML e CSS\19-pseudo-classes-parte2\css\19-pseudo-classes-parte2.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\10-Javascript tooling and es6 modules\4-validate cpf\src\assets\css\style.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\models\assets\css\style.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\1-HTML e CSS\20-pseudo-elementos\css\20-pseudo-elementos.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\10-Javascript tooling and es6 modules\5-generate password\src\assets\css\style.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\1-HTML e CSS\21-box-model\css\21-box-model.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\9-Asynchronous JavaScript\4- xlhttpRequest (GET) + Promises\assets\css\style.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\1-HTML e CSS\22-float-e-display\css\22-float-e-display.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\8-Class\6-validation form\assets\css\style.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\9-Asynchronous JavaScript\5-fetch api (get)\assets\css\style.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\5-Functions (Advanced)\7-exercice calculator\assets\css\style.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\4-Programming logic\18-exercice timer\assets\css\style.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\1-HTML e CSS\23-unidade-de-medida\css\23-unidade-de-medida.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\9-Asynchronous JavaScript\6-fetch api e axios\assets\css\style.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\4-Programming logic\2-exercice imc calculator\assets\css\style.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\model-webpack\src\assets\css\style.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\1-HTML e CSS\24-propriedades-para-texto\css\24-propriedades-para-texto.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\5-Functions (Advanced)\9-calculator constructor\assets\css\style.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\4-Programming logic\20-list\assets\css\style.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\1-HTML e CSS\25-position\css\25-position.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\1-HTML e CSS\26-media-queries-e-breakpoints\css\26-media-queries-e-breakpoints copy.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\1-HTML e CSS\27-juntando-tudo-aprendido\css\27-juntando-tudo-aprendido.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\1-HTML e CSS\28-flex-box-parte1\css\28-flex-box-parte1.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\4-Programming logic\6-exercice date\assets\css\style.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\1-HTML e CSS\29-flex-box-parte2\css\29-flex-box-parte2.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\1-HTML e CSS\30-flex-box-parte2\css\30-flex-box-parte2.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\4-Programming logic\9-exercice for\assets\css\style.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\1-HTML e CSS\31-flex-box-parte3\css\31-flex-box-parte3.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\1-HTML e CSS\32-grid-parte1\css\32-grid-parte1.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\1-HTML e CSS\33-grid-parte2-gap\css\33-grid-parte2-gap.css false
        // c:\Users\CAA224\Desktop\Estudos\CURSOJS\1-HTML e CSS\34-grid-template-areas\css\34-grid-template-areas.css false
        console.log(fileFullPath, stats.isDirectory());
    }

}


readddir('/Users/CAA224/Desktop/Estudos/CURSOJS')

