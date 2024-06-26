import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { DeviceModule } from './device/device.module';

@Module({
  imports: [UserModule, AuthModule, PrismaModule, DeviceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
