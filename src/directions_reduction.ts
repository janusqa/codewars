import { assert } from 'chai';

function dirReduc(arr: string[]): string[] {
    const directions: string[] = [];
    const map = { NORTH: 'SOUTH', SOUTH: 'NORTH', WEST: 'EAST', EAST: 'WEST' };

    for (const direction of arr) {
        if (directions.length === 0) directions.push(direction);
        else if (
            direction !==
            map[directions[directions.length - 1] as keyof typeof map]
        )
            directions.push(direction);
        else directions.pop();
    }

    return directions;
}

describe('directions reduction', function () {
    it('dirReduc', function () {
        assert.deepEqual(
            dirReduc([
                'NORTH',
                'SOUTH',
                'SOUTH',
                'EAST',
                'WEST',
                'NORTH',
                'WEST',
            ]),
            ['WEST']
        );
        assert.deepEqual(
            dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH']),
            []
        );
    });
});
