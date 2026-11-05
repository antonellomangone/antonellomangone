import { beforeEach, describe, expect, it } from "vitest";
import { setupCounter } from "../src/counter";

describe('setupCounter', () => {
    let button;

    beforeEach(() => {
        button = document.createElement('button');
        document.body.appendChild(button);

        setupCounter(button);
    });

    it('Dovrebbe inizializzare il contatore a zero', () => {
        expect(button.innerHTML).toBe('Count is 0');
    });

    it('Dovrebbe incrementare il contatore quando viene cliccato', () => {
        button.click();
        expect(button.innerHTML).toBe('Count is 1');

        button.click();
        expect(button.innerHTML).toBe('Count is 2');        
    });

});