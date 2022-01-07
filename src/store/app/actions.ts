import type { AppActionThis } from './types';
import { createAppState } from './state';
import type { ParticleId } from '~/types/particles';
import { getExpectedParticleIds } from '~/utils/particle-grid';

type SetParticleGridProps = {
	particleId: ParticleId;
	row: number;
	column: number;
};

export function getRow(this: AppActionThis, rowIndex: number) {
	if (this.particleGrid[rowIndex] === undefined) {
		throw new Error(`Invalid row: ${rowIndex}`);
	}

	return this.particleGrid[rowIndex]!;
}

export function getParticleGridCell(
	this: AppActionThis,
	{ column, row }: { row: number; column: number }
) {
	const cellRow = this.getRow(row);
	return cellRow[column];
}

export function setParticleGridCell(
	this: AppActionThis,
	{ particleId, column, row }: SetParticleGridProps
) {
	const cellRow = this.getRow(row);
	cellRow[column] = particleId;
}

export function unsetParticleGridCell(
	this: AppActionThis,
	{ column, row }: { row: number; column: number }
) {
	const cellRow = this.getRow(row);
	cellRow[column] = undefined;
}

export function checkAnswers(this: AppActionThis) {
	this.highlightErrors = true;
	for (let rowIndex = 0; rowIndex < this.particleGrid.length; rowIndex += 1) {
		const row = this.getRow(rowIndex);
		for (let columnIndex = 0; columnIndex < row.length; columnIndex += 1) {
			const currentGridParticle = this.getParticleGridCell({
				row: rowIndex,
				column: columnIndex,
			});
			if (
				currentGridParticle === undefined ||
				!getExpectedParticleIds({
					row: rowIndex,
					column: columnIndex,
				}).includes(currentGridParticle)
			) {
				return false;
			}
		}
	}

	this.isComplete = true;
	return true;
}

export function reset(this: AppActionThis) {
	this.$state = createAppState();
}