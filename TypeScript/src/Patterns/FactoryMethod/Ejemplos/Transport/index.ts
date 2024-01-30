import { Airplane } from './type/airplane';
import { Ship } from './type/ship';
import { ITransport } from './interfaces/transport.interface';
import { Truck } from './type/truck';
import { TransportTypeEnum } from './enums/transportTypeEnum';

// Factory method
abstract class TransportCreatorFactory {
  public abstract createTransport(): ITransport;

  public deliver(): string {
    const transport: ITransport = this.createTransport();
    return transport.deliver();
  }
}

// Concrete creators
class ShipCreator extends TransportCreatorFactory {
  public createTransport(): ITransport {
    return new Ship();
  }
}
class TruckCreator extends TransportCreatorFactory {
  public createTransport(): ITransport {
    return new Truck();
  }
}
class AirplaneCreator extends TransportCreatorFactory {
  public createTransport(): ITransport {
    return new Airplane();
  }
}

function delivery(transportCreator: TransportCreatorFactory) {
  console.log(transportCreator.deliver());
}

function selectTransport(type: TransportTypeEnum): TransportCreatorFactory {
  switch (type) {
    case TransportTypeEnum.Airplane:
      return new AirplaneCreator();
    case TransportTypeEnum.Ship:
      return new ShipCreator();
    case TransportTypeEnum.Truck:
      return new TruckCreator();
  }
}

delivery(selectTransport(TransportTypeEnum.Airplane));
delivery(selectTransport(TransportTypeEnum.Ship));
delivery(selectTransport(TransportTypeEnum.Truck));
