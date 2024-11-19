import type { ValidationChecks } from 'langium';
import type { RobotmlAstType } from './generated/ast.js';
import type { RobotmlServices } from './robotml-module.js';

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: RobotmlServices) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.RobotmlValidator;
    const checks: ValidationChecks<RobotmlAstType> = {
        //Person: validator.checkPersonStartsWithCapital
    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class RobotmlValidator {

    /*checkPersonStartsWithCapital(person: Person, accept: ValidationAcceptor): void {
        if (person.name) {
            const firstChar = person.name.substring(0, 1);
            if (firstChar.toUpperCase() !== firstChar) {
                accept('warning', 'Person name should start with a capital.', { node: person, property: 'name' });
            }
        }
    }*/

}
