import React from "react";
import {
  Car,
  CarButton,
  CarInformation,
  CarOption,
  Input,
  InputConteaner,
  Label,
  Pedestals,
  Serves,
  ServesList,
} from "./NewReservationsContent.style";

const CarInfo = () => {
  return (
    <CarInformation>
      <Car>
        <InputConteaner>
          <Label>ماركة السيارة </Label>
          <Input type={"text"} />
        </InputConteaner>
        <InputConteaner>
          <Label>موديل السيارة</Label>
          <Input type={"text"} />
        </InputConteaner>
        <InputConteaner>
          <Label>لون السيارة</Label>
          <Input type={"text"} />
        </InputConteaner>
      </Car>
      <CarOption>
        <Serves>
          <Label>الخدمات الاضافية </Label>
          <ServesList>
            <Pedestals>
              <Input type={"radio"} />
              <Label>تلبيس دعاسات</Label>
            </Pedestals>
            <Pedestals>
              <Input type={"radio"} />
              <Label>تلبيس دعاسات</Label>
            </Pedestals>
          </ServesList>
        </Serves>

        <InputConteaner>
          <Label>موديل السيارة</Label>
          <Input type={"text"} />
        </InputConteaner>
        <InputConteaner>
          <Label>لون السيارة</Label>
          <Input type={"text"} />
        </InputConteaner>
      </CarOption>
      <CarButton>حجز</CarButton>
    </CarInformation>
  );
};

export default CarInfo;
