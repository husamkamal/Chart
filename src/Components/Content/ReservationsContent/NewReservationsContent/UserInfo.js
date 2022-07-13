import React from 'react';
import { Input, InputConteaner, Label, UserInformation } from './NewReservationsContent.style';

const UserInfo = () => {
    return (
        <UserInformation>
            <InputConteaner>
                <Label>الاسم</Label>
                <Input type={'text'}   />
            </InputConteaner>
            <InputConteaner>
                <Label>رقم الهاتف</Label>
                <Input type={'text'}   />
            </InputConteaner>
            <InputConteaner>
                <Label>العنوان</Label>
                <Input type={'text'}   />
            </InputConteaner>
            <InputConteaner>
                <Label>تاريخ الحجز</Label>
                <Input type={'text'}   />
            </InputConteaner>
            <InputConteaner>
                <Label>ساعة الحجز</Label>
                <Input type={'text'}   />
            </InputConteaner>
        </UserInformation>
    );
}

export default UserInfo;
