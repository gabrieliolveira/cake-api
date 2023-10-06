import { Module } from '@nestjs/common';
import { CakeService } from './cake.service';
import { CakeResolver } from './cake.resolver';
import { DatabaseModule } from './database/database.module';

@Module({
  providers: [CakeResolver, CakeService],
  imports: [DatabaseModule],
  exports: [CakeService],
})
export class CakeModule {}
