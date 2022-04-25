import React from 'react';
import LeftArrow from 'src/common/Arrow/LeftArrow';
import RightArrow from 'src/common/Arrow/RightArrow';
import UpwardsArrow from 'src/common/Arrow/UpwardsArrow';
import ThreeArrowKeysGame from 'src/common/ArrowsGame/ThreeArrowKeysGame';
import Button from 'src/common/Button/Button';
import ButtonBack from 'src/common/ButtonBack/ButtonBack';
import LogoPC from 'src/common/Logo/Logo';
import TextField from 'src/common/TextField/TextField';
import Title from 'src/common/Title/Title';
import { CircleIcon } from 'src/common/CircleIcon/CircleIcon';
import { HeaderTest } from 'src/common/HeaderTest/HeaderTest';
import { CardText } from 'src/common/CardText/CardText';
import { IntroTests } from 'src/common/IntroTests/IntroTests';
import { ActionBackToListTests } from 'src/common/ActionBackToListTests/ActionBackToListTests';
import Check from 'src/common/Check/check';
import CardTest from 'src/common/CardTest/CardTest';
// import { unwrap } from '@reduxjs/toolkit';
export default function BaseView() {
  // const onSubmit = async (data) => {
  //   try {
  //     const originalPromiseResult = dispatch(postContactUs(data)).unwrap();
  //     // handle result here
  //   } catch (rejectedValueOrSerializedError) {
  //     // handle error here
  //   }
  // };
  return (
    <div className=" space-y-2 p-[40px]">
      LogoPC
      <LogoPC />
      TextField
      <TextField />
      Title
      <Title />
      ButtonBack
      <ButtonBack />
      Button
      <Button />
      <div className="text-center space-y-4 bg-red">
        <LeftArrow />
        <LeftArrow size="medium" />
        <LeftArrow size="large" />
        <RightArrow />
        <RightArrow size="medium" />
        <RightArrow size="large" />
        <UpwardsArrow />
      </div>
      <div className="text-center space-y-4 bg-blue">
        ThreeArrowKeysGame
        <ThreeArrowKeysGame />
      </div>
      <div className="text-center space-y-10 border-[2px] border-solid p-10 px-[50px]">
        CircleIcon
        <CircleIcon />
        HeaderTest
        <HeaderTest />
        CardText
        <CardText />
        IntroTests
        <IntroTests />
        ActionBackToListTests
        <ActionBackToListTests />
        Check
        {/* <Check /> */}
        Card Test
        <CardTest />
      </div>
    </div>
  );
}
