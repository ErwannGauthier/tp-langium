grammar Robotml

entry Program returns Program:
    statements+=Statement+;



interface Statement {}

interface Program {
    statements: Statement[];
}

// Interface représentant une déclaration de procédure avec des paramètres et un type de retour
interface ProcDeclaration extends Statement {
    name: string;
    returnType: Type;
    parameters: Parameter[];
    block: Block;
}

// Interface pour les blocs de statements
interface Block extends Statement {
    statements: Statement[];
}

// Interface pour une expression générale
interface Expression extends Statement {}

// Interface pour les paramètres avec un nom et un type
interface Parameter extends Expression {
    name: string;
    returnType: Type;
}

// Interface pour l'appel de procédure avec des arguments
interface ProcCall extends Expression {
    args: Expression[];
    declaration: ProcDeclaration;
}

// Interface pour une structure de contrôle générique (comme If, While)
interface ControlStructure extends Statement {
    block: Block;
    condition: Expression;
}

// Spécifique pour "If" avec une partie then et potentiellement un else
interface If extends ControlStructure {
    thenBlock: Block;
    elseBlock?: Block;
}

// Spécifique pour "While" avec un bloc de répétition
interface While extends ControlStructure {
    doBlock: Block;
}

// Interface pour les opérations binaires
interface BinaryExp extends Expression {
    opGauche: Expression;
    opDroite: Expression;
}

// Opérateurs binaires spécifiques
interface Plus extends BinaryExp {}
interface Minus extends BinaryExp {}
interface Mult extends BinaryExp {}
interface Div extends BinaryExp {}
interface Equals extends BinaryExp {}
interface Greater extends BinaryExp {}
interface Lower extends BinaryExp {}

// Constante numérique
interface Constant extends Expression {
    integerValue: number;
}

interface Primitive extends Statement {
}

// Interface représentant les différentes primitives de déplacement
interface Forward extends Primitive {
    distance: Expression;
    unit: Unit;
}

interface Back extends Primitive {
    distance: Expression;
    unit: Unit;
}

interface Left extends Primitive {}

interface Right extends Primitive {}

// Interface pour rotation avec un angle
interface Rotation extends Primitive {
    angle: Expression;
}

// Interface pour les capteurs
interface Sensor extends Primitive {}

// Interface pour la vitesse
interface Speed extends Primitive {
    distance: Expression;
    unit: Unit;
}

// Interface pour le retour d'une valeur dans une procédure
interface Return extends Statement {
    returnValue: Expression;
}

// Types de données abstraits
interface Type {}

interface void extends Type {}
interface string extends Type {}
interface boolean extends Type {}
interface int extends Type {}
interface double extends Type {}

// Unités de mesure pour les déplacements
interface Unit {}

interface Millimetre extends Unit {}
interface Centimetre extends Unit {}

hidden terminal WS: /\s+/;
terminal ID: /[_a-zA-Z][\w_]*/;
terminal INT returns number: /[0-9]+/;
terminal STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/;

hidden terminal ML_COMMENT: /\/\*[\s\S]*?\*\//;
hidden terminal SL_COMMENT: /\/\/[^\n\r]*/;
