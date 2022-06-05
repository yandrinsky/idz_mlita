let index = 0;
let str;
function getSym(){
    return str[index];
}

function getIndex(){
    return index;
}

function setIndex(newIndex){
    index = newIndex
    return true;
}

function next(){
    index += 1;
    return true;
}
function prev(){
    index -= 1;
    return true;
}

function Z(){
    const index = getIndex();
    if(G()){
        if(!L()){
            if(getSym() === undefined){
               return true
            }
            setIndex(index);
            R();
            if(getSym() === "x"){
                next();
                F();
                if(!L()){
                    return getSym() === undefined;
                } else {
                    return true;
                }
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        setIndex(index);
        R();
        if(getSym() === "x"){
            next();
            F();
            if(!L()){
                return getSym() === undefined;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }
}

function R(){
    if(!K()){
        return N();
    } else {
        return true;
    }
}

function N(){
    if(["2", "3", "4", "5", "6", "7", "8", "9"].includes(getSym())){
        next();
        return true;
    } else {
        return false;
    }
}

function K(){
    if(W()){
        if(O()){
            M();
            return true
        } else {
            prev();
            return false;
        }
    } else {
        return false
    }
}

function W(){
    if(["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(getSym())){
        next();
        return true;
    } else {
        return false;
    }
}

function O(){
    if(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(getSym())){
        next();
        return true;
    } else {
        return false;
    }
}

function M(){
    if(O()){
        M();
        return true;
    } else {
        return false;
    }
}

function F(){
    if(getSym() === "^"){
        next();
        if(!R()){
            prev();
            return false;
        } else {
            return true;
        }
    }
}

function L(){
    if(C()){
        if(!Z()){
            prev();
            return false;
        } return true;
    } else {
        return false;
    }
}

function C(){
    if(["+", "-"].includes(getSym())){
        next();
        return true;
    } else {
        return false;
    }
}

function G(){
    if(!W()){
        return false;
    } else {
        M();
        return true;
    }
}

str = "x^12-x^3+x-1200-x^25"
console.log(Z());

