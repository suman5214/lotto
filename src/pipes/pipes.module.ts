import { NgModule } from '@angular/core';
import { OrderByPipe } from './order-by/order-by';
import { TimesPipe } from './times/times';
@NgModule({
	declarations: [OrderByPipe,
    TimesPipe],
	imports: [],
	exports: [OrderByPipe,
    TimesPipe]
})
export class PipesModule {}
