import { AdditiveExpression, AndExpression, Back, Block, Bool, Centimetre, Constant, ControlStructure, Double, EqualityExpression, Expression, Forward, GetClock, GetDistance, If, Int, Left, Millimetre, MultiplicativeExpression, OrExpression, Parameter, Primitive, ProcCall, ProcDeclaration, Program, RelationalExpression, Return, Right, Rotation, Sensor, SimpleExpression, Speed, Statement, Type, Unit, VarAffectation, VarCall, VarDeclaration, Vide, Visitor, While } from "../language/visitors/visitor.js";

export class VisitorInterpreter implements Visitor {
    visitProgram(node: Program) {
        throw new Error("Method not implemented.");
    }
    visitStatement(node: Statement) {
        throw new Error("Method not implemented.");
    }
    visitProcDeclaration(node: ProcDeclaration) {
        throw new Error("Method not implemented.");
    }
    visitParameter(node: Parameter) {
        throw new Error("Method not implemented.");
    }
    visitBlock(node: Block) {
        throw new Error("Method not implemented.");
    }
    visitControlStructure(node: ControlStructure) {
        throw new Error("Method not implemented.");
    }
    visitIf(node: If) {
        throw new Error("Method not implemented.");
    }
    visitWhile(node: While) {
        throw new Error("Method not implemented.");
    }
    visitPrimitive(node: Primitive) {
        throw new Error("Method not implemented.");
    }
    visitForward(node: Forward) {
        throw new Error("Method not implemented.");
    }
    visitBack(node: Back) {
        throw new Error("Method not implemented.");
    }
    visitLeft(node: Left) {
        throw new Error("Method not implemented.");
    }
    visitRight(node: Right) {
        throw new Error("Method not implemented.");
    }
    visitRotation(node: Rotation) {
        throw new Error("Method not implemented.");
    }
    visitSensor(node: Sensor) {
        throw new Error("Method not implemented.");
    }
    visitGetDistance(node: GetDistance) {
        throw new Error("Method not implemented.");
    }
    visitGetClock(node: GetClock) {
        throw new Error("Method not implemented.");
    }
    visitSpeed(node: Speed) {
        throw new Error("Method not implemented.");
    }
    visitReturn(node: Return) {
        throw new Error("Method not implemented.");
    }
    visitProcCall(node: ProcCall) {
        throw new Error("Method not implemented.");
    }
    visitType(node: Type) {
        throw new Error("Method not implemented.");
    }
    visitVide(node: Vide) {
        throw new Error("Method not implemented.");
    }
    visitBool(node: Bool) {
        throw new Error("Method not implemented.");
    }
    visitInt(node: Int) {
        throw new Error("Method not implemented.");
    }
    visitDouble(node: Double) {
        throw new Error("Method not implemented.");
    }
    visitUnit(node: Unit) {
        throw new Error("Method not implemented.");
    }
    visitMillimetre(node: Millimetre) {
        throw new Error("Method not implemented.");
    }
    visitCentimetre(node: Centimetre) {
        throw new Error("Method not implemented.");
    }
    visitExpression(node: Expression) {
        throw new Error("Method not implemented.");
    }
    visitOrExpression(node: OrExpression) {
        throw new Error("Method not implemented.");
    }
    visitAndExpression(node: AndExpression) {
        throw new Error("Method not implemented.");
    }
    visitEqualityExpression(node: EqualityExpression) {
        throw new Error("Method not implemented.");
    }
    visitRelationalExpression(node: RelationalExpression) {
        throw new Error("Method not implemented.");
    }
    visitAdditiveExpression(node: AdditiveExpression) {
        throw new Error("Method not implemented.");
    }
    visitMultiplicativeExpression(node: MultiplicativeExpression) {
        throw new Error("Method not implemented.");
    }
    visitSimpleExpression(node: SimpleExpression) {
        throw new Error("Method not implemented.");
    }
    visitConstant(node: Constant) {
        throw new Error("Method not implemented.");
    }
    visitVarDeclaration(node: VarDeclaration) {
        throw new Error("Method not implemented.");
    }
    visitVarCall(node: VarCall) {
        throw new Error("Method not implemented.");
    }
    visitVarAffectation(node: VarAffectation) {
        throw new Error("Method not implemented.");
    }
    
}