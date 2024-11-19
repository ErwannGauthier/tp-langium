
import * as ASTInterfaces from '../generated/ast.js';
import { AstNode, CstNode, LangiumDocument, Reference } from 'langium';

export interface Visitor{
    visitProgram(node : Program) : any;
	visitStatement(node : Statement) : any;
	visitProcDeclaration(node : ProcDeclaration) : any;
	visitParameter(node : Parameter) : any;
	visitBlock(node : Block) : any;
	visitControlStructure(node : ControlStructure) : any;
	visitIf(node : If) : any;
	visitWhile(node : While) : any;
	visitPrimitive(node : Primitive) : any;
	visitForward(node : Forward) : any;
	visitBack(node : Back) : any;
	visitLeft(node : Left) : any;
	visitRight(node : Right) : any;
	visitRotation(node : Rotation) : any;
	visitSensor(node : Sensor) : any;
	visitGetDistance(node : GetDistance) : any;
	visitGetClock(node : GetClock) : any;
	visitSpeed(node : Speed) : any;
	visitReturn(node : Return) : any;
	visitProcCall(node : ProcCall) : any;
	visitType(node : Type) : any;
	visitVide(node : Vide) : any;
	visitBool(node : Bool) : any;
	visitInt(node : Int) : any;
	visitDouble(node : Double) : any;
	visitUnit(node : Unit) : any;
	visitMillimetre(node : Millimetre) : any;
	visitCentimetre(node : Centimetre) : any;
	visitExpression(node : Expression) : any;
	visitOrExpression(node : OrExpression) : any;
	visitAndExpression(node : AndExpression) : any;
	visitEqualityExpression(node : EqualityExpression) : any;
	visitRelationalExpression(node : RelationalExpression) : any;
	visitAdditiveExpression(node : AdditiveExpression) : any;
	visitMultiplicativeExpression(node : MultiplicativeExpression) : any;
	visitSimpleExpression(node : SimpleExpression) : any;
	visitConstant(node : Constant) : any;
	visitVarDeclaration(node : VarDeclaration) : any;
	visitVarCall(node : VarCall) : any;
	visitVarAffectation(node : VarAffectation) : any;
}


export class Program implements ASTInterfaces.Program {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(
        public $type: 'Program', 
        public statements: Statement[]
    ){}
    accept(visitor: Visitor) : any {}
}

export class Statement implements ASTInterfaces.Statement {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(public $type: 'Statement'){}
    accept(visitor: Visitor) : any {}
}

export class ProcDeclaration implements ASTInterfaces.ProcDeclaration {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(
        public $type: 'ProcDeclaration', 
        public name: string,
        public returnType: Type,
        public parameters: Parameter[],
        public block: Block
    ){}
    accept(visitor: Visitor) : any {}
}

export class Parameter implements ASTInterfaces.Parameter {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(
        public $type: 'Parameter',
        public name: string,
        public returnType: Type,
        public $container: ProcDeclaration,
        public $containerProperty?: string | undefined,
        public $containerIndex?: number | undefined,
        public $cstNode?: CstNode | undefined,
        public $document?: LangiumDocument<AstNode> | undefined
    ){}
    
    accept(visitor: Visitor) : any {}
}

export class Block implements ASTInterfaces.Block {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(
        public $type: 'Block',
        public statements: Statement[],
        public $container: ProcDeclaration | If | While,
        public $containerProperty?: string | undefined,
        public $containerIndex?: number | undefined,
        public $cstNode?: CstNode | undefined,
        public $document?: LangiumDocument<AstNode> | undefined
    ){}
    
    accept(visitor: Visitor) : any {}
}

export class ControlStructure implements ASTInterfaces.ControlStructure {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(
        public $type: 'ControlStructure',
        public condition: Expression,
        ){}
    
    accept(visitor: Visitor) : any {}
}

export class If implements ASTInterfaces.If {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(
        public $type: 'If',
        public thenBlock: Block,
        public condition: Expression,
        public elseBlock?: Block | undefined,
    ){}
    accept(visitor: Visitor) : any {}
}

export class While implements ASTInterfaces.While {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(
        public $type: 'While',
        public doBlock: Block,
        public condition: Expression,
    ){}

    accept(visitor: Visitor) : any {}
}

export class Primitive implements ASTInterfaces.Primitive {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(public $type: 'Back' | 'Forward' | 'Left' | 'Primitive' | 'Right' | 'Rotation' | 'Speed'){}
    accept(visitor: Visitor) : any {}
}

export class Forward implements ASTInterfaces.Forward {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(
        public $type: 'Forward',
        public distance: Expression,
        public unit: Unit,
    ){}

    accept(visitor: Visitor) : any {}
}

export class Back implements ASTInterfaces.Back {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(
        public $type: 'Back',
        public distance: Expression,
        public unit: Unit,
    ){}

    accept(visitor: Visitor) : any {}
}

export class Left implements ASTInterfaces.Left {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(public $type: 'Left'){}
    accept(visitor: Visitor) : any {}
}

export class Right implements ASTInterfaces.Right {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(public $type: 'Right'){}
    accept(visitor: Visitor) : any {}
}

export class Rotation implements ASTInterfaces.Rotation {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(
        public $type: 'Rotation',
        public angle: Expression,
    ){}

    accept(visitor: Visitor) : any {}
}

export class Sensor implements ASTInterfaces.Sensor {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(public $type: 'GetClock' | 'GetDistance' | 'Sensor'){}
    accept(visitor: Visitor) : any {}
}

export class GetDistance implements ASTInterfaces.GetDistance {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(
        public $type: 'GetDistance',
        public unit?: Unit
    ){}
    accept(visitor: Visitor) : any {}
}

export class GetClock implements ASTInterfaces.GetClock {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(public $type: 'GetClock'){}
    accept(visitor: Visitor) : any {}
}

export class Speed implements ASTInterfaces.Speed {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(
        public $type: 'Speed',
        public distance: Expression,
        public unit: Unit,
    ){}

    accept(visitor: Visitor) : any {}
}

export class Return implements ASTInterfaces.Return {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(
        public $type: 'Return',
        public returnValue: Expression,
    ){}

    accept(visitor: Visitor) : any {}
}

export class ProcCall implements ASTInterfaces.ProcCall {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(
        public $type: 'ProcCall',
        public $container: ASTInterfaces.SimpleExpression,
        public args: Expression[],
        public proc: Reference<ProcDeclaration>,
        public $containerProperty?: string | undefined,
        public $containerIndex?: number | undefined,
        public $cstNode?: CstNode | undefined,
        public $document?: LangiumDocument<AstNode> | undefined
    ){}

    accept(visitor: Visitor) : any {}
}

export class Type implements ASTInterfaces.Type {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(public $type: 'Bool' | 'Double' | 'Int' | 'Type' | 'Vide'){}
    accept(visitor: Visitor) : any {}
}

export class Vide implements ASTInterfaces.Vide {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(public $type: 'Vide'){}
    accept(visitor: Visitor) : any {}
}

export class Bool implements ASTInterfaces.Bool {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(public $type: 'Bool'){}
    accept(visitor: Visitor) : any {}
}

export class Int implements ASTInterfaces.Int {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(public $type: 'Int'){}
    accept(visitor: Visitor) : any {}
}

export class Double implements ASTInterfaces.Double {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(public $type: 'Double'){}
    accept(visitor: Visitor) : any {}
}

export class Unit implements ASTInterfaces.Unit {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(public $type: 'Centimetre' | 'Millimetre' | 'Unit'){}
    accept(visitor: Visitor) : any {}
}

export class Millimetre implements ASTInterfaces.Millimetre {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(public $type: 'Millimetre'){}
    accept(visitor: Visitor) : any {}
}

export class Centimetre implements ASTInterfaces.Centimetre {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(public $type: 'Centimetre'){}
    accept(visitor: Visitor) : any {}
}

export class Expression implements ASTInterfaces.Expression {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(public $type: 'AdditiveExpression' | 'AndExpression' | 'Constant' | 'EqualityExpression' | 'Expression' | 'GetClock' | 'GetDistance' | 'MultiplicativeExpression' | 'OrExpression' | 'Parameter' | 'ProcCall' | 'RelationalExpression' | 'Sensor' | 'SimpleExpression' | 'VarAffectation' | 'VarCall'){}
    accept(visitor: Visitor) : any {}
}

export class OrExpression implements ASTInterfaces.OrExpression {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(
        public $type: 'OrExpression',
        public left: Expression,
        public right?: AndExpression | undefined,
    ){}

    accept(visitor: Visitor) : any {}
}

export class AndExpression implements ASTInterfaces.AndExpression {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(
        public $type: 'AndExpression',
        public $container: OrExpression,
        public left: Expression,
        public right?: EqualityExpression | undefined,
        public $containerProperty?: string | undefined,
        public $containerIndex?: number | undefined,
        public $cstNode?: CstNode | undefined,
        public $document?: LangiumDocument<AstNode> | undefined
    ){}

    accept(visitor: Visitor) : any {}
}

export class EqualityExpression implements ASTInterfaces.EqualityExpression {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(
        public $type: 'EqualityExpression',
        public $container: AndExpression,
        public left: Expression,
        //public operator?: '!=' | '==' | undefined,
        public right?: RelationalExpression | undefined,
        public $containerProperty?: string | undefined,
        public $containerIndex?: number | undefined,
        public $cstNode?: CstNode | undefined,
        public $document?: LangiumDocument<AstNode> | undefined
    ){}

    accept(visitor: Visitor) : any {}
}

export class RelationalExpression implements ASTInterfaces.RelationalExpression {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(
        public $type: 'RelationalExpression',
        public $container: EqualityExpression,
        public left: Expression,
        //public operator?: '<' | '<=' | '>' | '>=' | undefined,
        public right?: AdditiveExpression | undefined,
        public $containerProperty?: string | undefined,
        public $containerIndex?: number | undefined,
        public $cstNode?: CstNode | undefined,
        public $document?: LangiumDocument<AstNode> | undefined
    ){}

    accept(visitor: Visitor) : any {}
}

export class AdditiveExpression implements ASTInterfaces.AdditiveExpression {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(
        public $type: 'AdditiveExpression',
        public $container: RelationalExpression,
        public left: Expression,
        //public operator?: '+' | '-' | undefined,
        public right?: MultiplicativeExpression | undefined,
        public $containerProperty?: string | undefined,
        public $containerIndex?: number | undefined,
        public $cstNode?: CstNode | undefined,
        public $document?: LangiumDocument<AstNode> | undefined
    ){}

    accept(visitor: Visitor) : any {}
}

export class MultiplicativeExpression implements ASTInterfaces.MultiplicativeExpression {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(
        public $type: 'MultiplicativeExpression',
        public $container: AdditiveExpression,
        public left: Expression,
        //public operator?: '*' | '/ ' ,
        public right?: SimpleExpression,
        public $containerProperty?: string ,
        public $containerIndex?: number ,
        public $cstNode?: CstNode ,
        public $document?: LangiumDocument<AstNode>
    ){}

    accept(visitor: Visitor) : any {}
}

export class SimpleExpression implements ASTInterfaces.SimpleExpression {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(
        public $type: 'SimpleExpression',
        public $container: MultiplicativeExpression,
        public value: Sensor | ProcCall | Constant | VarCall,
        public $containerProperty?: string | undefined,
        public $containerIndex?: number | undefined,
        public $cstNode?: CstNode | undefined,
        public $document?: LangiumDocument<AstNode> | undefined
    ){}

    accept(visitor: Visitor) : any {}
}

export class Constant implements ASTInterfaces.Constant {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(
        public $type: 'Constant',
        public $container: SimpleExpression,
        public integerValue: number,
        public $containerProperty?: string | undefined,
        public $containerIndex?: number | undefined,
        public $cstNode?: CstNode | undefined,
        public $document?: LangiumDocument<AstNode> | undefined
    ){}

    accept(visitor: Visitor) : any {}
}

export class VarDeclaration implements ASTInterfaces.VarDeclaration {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(
        public $type: 'VarDeclaration',
        public name: string,
        public valeur: Expression,
        public varType: Type,
    ){}

    accept(visitor: Visitor) : any {}
}

export class VarCall implements ASTInterfaces.VarCall {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(
        public $type: 'VarCall',
        public $container: SimpleExpression,
        public varName: Reference<VarDeclaration>,
        public $containerProperty?: string | undefined,
        public $containerIndex?: number | undefined,
        public $cstNode?: CstNode | undefined,
        public $document?: LangiumDocument<AstNode> | undefined
    ){}

    accept(visitor: Visitor) : any {}
}

export class VarAffectation implements ASTInterfaces.VarAffectation {
    // the constructor must take all attribute of the implemented interface 
    // simply copy-paste the interface fields as public parameters
    // you can find them in generated/ast.ts
    constructor(
        public $type: 'VarAffectation',
        public valeur: Expression,
        public varName: Reference<VarDeclaration>,
    ){}

    accept(visitor: Visitor) : any {}
}

