/**
 * remove all dashes from a minecraft UUID
 * @param uuid
 */
export const minifyUUID = (uuid: string): string => {
    const minifiedUUID = uuid.replace(/-/g, '');
    if (minifiedUUID.length === 32) {
        return minifiedUUID;
    }

    throw new Error(`UUID could not be minified. Invalid UUID length. (${minifiedUUID})`);
};

/**
 * add dashes to a minecraft uuid
 * @param uuid
 */
export const formatUUID = (uuid: string): string => {
    if (uuid.length === 32) {
        return `${uuid.substr(0, 8)}-${uuid.substr(8, 4)}-${uuid.substr(12, 4)}-${uuid.substr(16, 4)}-${uuid.substr(
            20
        )}`;
    }

    throw new Error('UUID could not be formatted. Invalid UUID length.');
};
