grammar Robotml

entry Program returns Program:
    statements+=Statement+;

Statement returns Statement:
    ProcDeclaration | ControlStructure | Primitive | Expression | Return | VarDeclaration | VarAffectation;

ProcDeclaration returns ProcDeclaration:
    'let' returnType=Type name=ID '(' (parameters+=Parameter (',' parameters+=Parameter)*)? ')' block=Block;

Parameter returns Parameter:
    name=ID ':' returnType=Type;

Block returns Block:
    '{' statements+=Statement* '}';

ControlStructure returns ControlStructure:
    If | While;

If returns If:
    'if' condition=Expression thenBlock=Block ('else' elseBlock=Block)?;

While returns While:
    'while' condition=Expression doBlock=Block;

Primitive returns Primitive:
    Forward | Back | Left | Right | Rotation | Sensor | Speed;

Forward returns Forward:
    'forward' distance=Expression unit=Unit;

Back returns Back:
    'back' distance=Expression unit=Unit;

Left returns Left:
    {Left} 'left';

Right returns Right:
    {Right} 'right';

Rotation returns Rotation:
    'rotate' angle=Expression;

Sensor returns Sensor:
    GetDistance | GetClock;

GetDistance returns GetDistance:
    {GetDistance} 'GetDistance()' ('in' unit=Unit)?;

GetClock returns GetClock:
    {GetClock} 'GetClock()';

Speed returns Speed:
    'speed' distance=Expression unit=Unit;

Return returns Return:
    'return' returnValue=Expression;

ProcCall returns ProcCall:
    proc=[ProcDeclaration:ID] '(' (args+=Expression (',' args+=Expression)*)? ')';

Type returns Type:
    Vide | Bool | Int | Double;

Vide returns Vide:
    {Vide} 'void';

Bool returns Bool:
    {Bool} 'bool';

Int returns Int:
    {Int} 'int';

Double returns Double:
    {Double} 'double';

Unit returns Unit:
    Millimetre | Centimetre;

Millimetre returns Millimetre:
    {Millimetre} 'mm';

Centimetre returns Centimetre:
    {Centimetre} 'cm';

Expression returns Expression:
    OrExpression;

OrExpression returns OrExpression:
    left=AndExpression ('||' right=AndExpression)*;

AndExpression returns AndExpression:
    left=EqualityExpression ('&&' right=EqualityExpression)*;

EqualityExpression returns EqualityExpression:
    left=RelationalExpression (('==' | '!=') right=RelationalExpression)*;

RelationalExpression returns RelationalExpression:
    left=AdditiveExpression (('>' | '<' | '>=' | '<=') right=AdditiveExpression)*;

AdditiveExpression returns AdditiveExpression:
    left=MultiplicativeExpression (('+' | '-') right=MultiplicativeExpression)*;

MultiplicativeExpression returns MultiplicativeExpression:
    left=SimpleExpression (('*' | '/') right=SimpleExpression)*;

SimpleExpression returns SimpleExpression:
    value=Constant | ProcCall | Sensor | VarCall;

Constant returns Constant:
    integerValue=INT;

VarDeclaration returns VarDeclaration:
    'var' varType=Type name=ID '=' valeur=Expression;

VarCall returns VarCall:
    varName=[VarDeclaration:ID];

VarAffectation returns VarAffectation:
    varName=[VarDeclaration:ID] '=' valeur=Expression;

hidden terminal WS: /\s+/;
terminal ID: /[_a-zA-Z][\w_]*/;
terminal INT returns number: /[0-9]+/;
terminal STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/;

hidden terminal ML_COMMENT: /\/\*[\s\S]*?\*\//;
hidden terminal SL_COMMENT: /\/\/[^\n\r]*/;


///////////////////////////


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
    proc: @ProcDeclaration;
}

// Interface pour une structure de contrôle générique (comme If, While)
interface ControlStructure extends Statement {
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

// Expression "ou" logique (OR)
interface OrExpression extends Expression {
    left: Expression;
    right?: AndExpression; // Optionnel car un seul AndExpression peut être présent
}

// Expression "et" logique (AND)
interface AndExpression extends Expression {
    left: Expression;
    right?: EqualityExpression; // Optionnel
}

// Expression d'égalité (==, !=)
interface EqualityExpression extends Expression {
    left: Expression;
    right?: RelationalExpression; // Optionnel
}

// Expression relationnelle (<, >, <=, >=)
interface RelationalExpression extends Expression {
    left: Expression;
    right?: AdditiveExpression; // Optionnel
}

// Expression additive (+, -)
interface AdditiveExpression extends Expression {
    left: Expression;
    right?: MultiplicativeExpression; // Optionnel
}

// Expression multiplicative (*, /)
interface MultiplicativeExpression extends Expression {
    left: Expression;
    right?: SimpleExpression; // Optionnel
}

// Expression simple (constante, appel de procédure, ou parenthésée)
interface SimpleExpression extends Expression {
    value: Constant | ProcCall | Sensor | VarCall;
}

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
interface Sensor extends Expression {}

interface GetDistance extends Sensor {
    unit?: Unit;
}

interface GetClock extends Sensor {}

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

interface Vide extends Type {}
interface Bool extends Type {}
interface Int extends Type {}
interface Double extends Type {}

// Unités de mesure pour les déplacements
interface Unit {}

interface Millimetre extends Unit {}
interface Centimetre extends Unit {}

interface VarDeclaration extends Statement {
    name: string;
    varType: Type;
    valeur: Expression;
}

interface VarCall extends Expression {
    varName: @VarDeclaration;
}

interface VarAffectation extends Expression {
    varName: @VarDeclaration;
    valeur: Expression;
}
/////////////////////////////////////

