import { APP_INITIALIZER } from '@angular/core';
import { FluxogramaFacade } from './fluxograma.facade';

export const fluxogramaInitializer = (
	fluxogramaFacade: FluxogramaFacade,
) => () => {
	// fluxogramaFacade.getResumoProcessos();
	// fluxogramaFacade.getVisualizacao();
};

export const fluxogramaInitializerProvider = {
	provide: APP_INITIALIZER,
	useFactory: fluxogramaInitializer,
	multi: true,
	deps: [FluxogramaFacade],
};

