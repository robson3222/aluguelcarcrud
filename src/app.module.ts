import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarrosModule } from './carros/carros.module';

@Module({
  imports: [CarrosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
