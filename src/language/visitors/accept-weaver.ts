
import type { ValidationAcceptor, ValidationChecks } from 'langium';
import type { RobotmlAstType } from '../generated/ast.js';
import * as InterfaceAST from '../generated/ast.js';
import * as ClassAST from './visitor.js';
import { Visitor } from './visitor.js';
import type { RobotmlServices } from '../robotml-module.js';

/**
 * Register custom validation checks.
 * TODO : Call this function in the language module.ts file (see registerValidationChecks(...);)
 */
export function weaveAcceptMethods(services: RobotmlServices) {
    const registry = services.validation.ValidationRegistry;
    const weaver = services.validation.RobotmlAcceptWeaver;
    registry.register(weaver.checks, weaver);
}

export class RobotmlAcceptWeaver {
    
    // TODO : Remove lines for abstract concepts
    checks: ValidationChecks<RobotmlAstType> = {
        Program : this.weaveProgram,
		Statement : this.weaveStatement,
		ProcDeclaration : this.weaveProcDeclaration,
		Parameter : this.weaveParameter,
		Block : this.weaveBlock,
		ControlStructure : this.weaveControlStructure,
		If : this.weaveIf,
		While : this.weaveWhile,
		Primitive : this.weavePrimitive,
		Forward : this.weaveForward,
		Back : this.weaveBack,
		Left : this.weaveLeft,
		Right : this.weaveRight,
		Rotation : this.weaveRotation,
		Sensor : this.weaveSensor,
		GetDistance : this.weaveGetDistance,
		GetClock : this.weaveGetClock,
		Speed : this.weaveSpeed,
		Return : this.weaveReturn,
		ProcCall : this.weaveProcCall,
		Type : this.weaveType,
		Vide : this.weaveVide,
		Bool : this.weaveBool,
		Int : this.weaveInt,
		Double : this.weaveDouble,
		Unit : this.weaveUnit,
		Millimetre : this.weaveMillimetre,
		Centimetre : this.weaveCentimetre,
		Expression : this.weaveExpression,
		OrExpression : this.weaveOrExpression,
		AndExpression : this.weaveAndExpression,
		EqualityExpression : this.weaveEqualityExpression,
		RelationalExpression : this.weaveRelationalExpression,
		AdditiveExpression : this.weaveAdditiveExpression,
		MultiplicativeExpression : this.weaveMultiplicativeExpression,
		SimpleExpression : this.weaveSimpleExpression,
		Constant : this.weaveConstant,
		VarDeclaration : this.weaveVarDeclaration,
		VarCall : this.weaveVarCall,
		VarAffectation : this.weaveVarAffectation
    };

    
weaveProgram(node : InterfaceAST.Program, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitProgram(node as unknown as ClassAST.Program); }
}

weaveStatement(node : InterfaceAST.Statement, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitStatement(node as unknown as ClassAST.Statement); }
}

weaveProcDeclaration(node : InterfaceAST.ProcDeclaration, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitProcDeclaration(node as unknown as ClassAST.ProcDeclaration); }
}

weaveParameter(node : InterfaceAST.Parameter, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitParameter(node as unknown as ClassAST.Parameter); }
}

weaveBlock(node : InterfaceAST.Block, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitBlock(node as unknown as ClassAST.Block); }
}

weaveControlStructure(node : InterfaceAST.ControlStructure, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitControlStructure(node as unknown as ClassAST.ControlStructure); }
}

weaveIf(node : InterfaceAST.If, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitIf(node as unknown as ClassAST.If); }
}

weaveWhile(node : InterfaceAST.While, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitWhile(node as unknown as ClassAST.While); }
}

weavePrimitive(node : InterfaceAST.Primitive, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitPrimitive(node as unknown as ClassAST.Primitive); }
}

weaveForward(node : InterfaceAST.Forward, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitForward(node as unknown as ClassAST.Forward); }
}

weaveBack(node : InterfaceAST.Back, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitBack(node as unknown as ClassAST.Back); }
}

weaveLeft(node : InterfaceAST.Left, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitLeft(node as unknown as ClassAST.Left); }
}

weaveRight(node : InterfaceAST.Right, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitRight(node as unknown as ClassAST.Right); }
}

weaveRotation(node : InterfaceAST.Rotation, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitRotation(node as unknown as ClassAST.Rotation); }
}

weaveSensor(node : InterfaceAST.Sensor, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitSensor(node as unknown as ClassAST.Sensor); }
}

weaveGetDistance(node : InterfaceAST.GetDistance, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitGetDistance(node as unknown as ClassAST.GetDistance); }
}

weaveGetClock(node : InterfaceAST.GetClock, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitGetClock(node as unknown as ClassAST.GetClock); }
}

weaveSpeed(node : InterfaceAST.Speed, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitSpeed(node as unknown as ClassAST.Speed); }
}

weaveReturn(node : InterfaceAST.Return, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitReturn(node as unknown as ClassAST.Return); }
}

weaveProcCall(node : InterfaceAST.ProcCall, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitProcCall(node as unknown as ClassAST.ProcCall); }
}

weaveType(node : InterfaceAST.Type, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitType(node as unknown as ClassAST.Type); }
}

weaveVide(node : InterfaceAST.Vide, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitVide(node as unknown as ClassAST.Vide); }
}

weaveBool(node : InterfaceAST.Bool, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitBool(node as unknown as ClassAST.Bool); }
}

weaveInt(node : InterfaceAST.Int, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitInt(node as unknown as ClassAST.Int); }
}

weaveDouble(node : InterfaceAST.Double, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitDouble(node as unknown as ClassAST.Double); }
}

weaveUnit(node : InterfaceAST.Unit, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitUnit(node as unknown as ClassAST.Unit); }
}

weaveMillimetre(node : InterfaceAST.Millimetre, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitMillimetre(node as unknown as ClassAST.Millimetre); }
}

weaveCentimetre(node : InterfaceAST.Centimetre, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitCentimetre(node as unknown as ClassAST.Centimetre); }
}

weaveExpression(node : InterfaceAST.Expression, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitExpression(node as unknown as ClassAST.Expression); }
}

weaveOrExpression(node : InterfaceAST.OrExpression, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitOrExpression(node as unknown as ClassAST.OrExpression); }
}

weaveAndExpression(node : InterfaceAST.AndExpression, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitAndExpression(node as unknown as ClassAST.AndExpression); }
}

weaveEqualityExpression(node : InterfaceAST.EqualityExpression, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitEqualityExpression(node as unknown as ClassAST.EqualityExpression); }
}

weaveRelationalExpression(node : InterfaceAST.RelationalExpression, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitRelationalExpression(node as unknown as ClassAST.RelationalExpression); }
}

weaveAdditiveExpression(node : InterfaceAST.AdditiveExpression, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitAdditiveExpression(node as unknown as ClassAST.AdditiveExpression); }
}

weaveMultiplicativeExpression(node : InterfaceAST.MultiplicativeExpression, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitMultiplicativeExpression(node as unknown as ClassAST.MultiplicativeExpression); }
}

weaveSimpleExpression(node : InterfaceAST.SimpleExpression, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitSimpleExpression(node as unknown as ClassAST.SimpleExpression); }
}

weaveConstant(node : InterfaceAST.Constant, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitConstant(node as unknown as ClassAST.Constant); }
}

weaveVarDeclaration(node : InterfaceAST.VarDeclaration, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitVarDeclaration(node as unknown as ClassAST.VarDeclaration); }
}

weaveVarCall(node : InterfaceAST.VarCall, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitVarCall(node as unknown as ClassAST.VarCall); }
}

weaveVarAffectation(node : InterfaceAST.VarAffectation, accept : ValidationAcceptor) : void {
    (<any> node).accept = (visitor: Visitor) => { return visitor.visitVarAffectation(node as unknown as ClassAST.VarAffectation); }
}


}
