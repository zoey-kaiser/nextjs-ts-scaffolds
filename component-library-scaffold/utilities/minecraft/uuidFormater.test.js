import { minifyUUID, formatUUID } from './uuidFormatter';

describe('UUID Formatter', () => {
    it('should remove all dashes from the uuid.', () => {
        const originalUUID = 'a0c58393-42f4-4505-9770-b33292691057';
        const minifiedUUID = minifyUUID(originalUUID);

        expect(minifiedUUID.includes('-')).not.toBe(true);
    });

    it('should add dashes to the uuid.', () => {
        const originalUUID = 'a0c5839342f445059770b33292691057';
        const minifiedUUID = formatUUID(originalUUID);

        expect(minifiedUUID.includes('-')).toBe(true);
    });

    it('should thrown an error.', () => {
        expect(() => minifyUUID('wrongUUID')).toThrow('UUID could not be minified. Invalid UUID length. (wrongUUID)');
    });
});
