import { Injectable } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';

@Injectable()
export class DeviceService {
  private DEVICES = [];

  create(dto: CreateDeviceDto) {
    this.DEVICES.push({
      name: dto.name,
      type: dto.type,
      id: this.DEVICES.length,
    });
    return this.DEVICES;
  }

  findAll() {
    return this.DEVICES;
  }

  findOne(id: number) {
    return this.DEVICES.find((device) => device.id === id);
  }

  update(id: number, dto: CreateDeviceDto) {
    const currentDevice = this.DEVICES.find((device) => device.id === id);
    currentDevice.name = dto.name;
    currentDevice.type = dto.type;
    return currentDevice;
  }

  remove(id: number) {
    this.DEVICES.splice(id, 1);
    return this.DEVICES;
  }

  getFiveDevices() {
    return this.DEVICES.slice(0, 5);
  }
}
