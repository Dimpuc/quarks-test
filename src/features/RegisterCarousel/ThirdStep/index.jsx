/* eslint-disable react/prop-types */
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../../../common/components/Input";
import { Button } from "../../../common/components/Button";
import { Select } from "../../../common/components/Select";
import { ErrorMessage } from "../../../common/components/ErrorMessage";

import { schemaRegister } from "./schema";
import { dayOptions, formatErrors, monthOptions, yearOptions } from "./utils";

import {
  Form,
  SelectDateWrapper,
  SelectLabel,
  Title,
  TitleWrapper,
  Wrapper,
} from "./styles";

const ThirdStep = ({ handleRegister }) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schemaRegister),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      day: "DD",
      month: "MM",
      year: "YYYY",
    },
  });

  const onSubmit = (data) => {
    const birthday = {
      day: data.day,
      month: data.month,
      year: data.year,
    };

    handleRegister({
      name: data.name,
      password: data.password,
      email: data.email,
      birthday,
    });

    reset();
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Создать анкету</Title>
        <span>Бистрая регистрация, чтоби перейти к общению</span>
      </TitleWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Имя"
          placeholder="Введите имя"
          name="name"
          id="name"
          type="text"
          errors={errors}
          register={register}
        />

        <SelectDateWrapper>
          <SelectLabel>Дата рождения:</SelectLabel>
          <div>
            <Controller
              name="day"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  register={register}
                  errors={errors}
                  options={dayOptions}
                />
              )}
            />
            <Controller
              name={"month"}
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  register={register}
                  errors={errors}
                  options={monthOptions}
                />
              )}
            />
            <Controller
              name={"year"}
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  register={register}
                  errors={errors}
                  options={yearOptions}
                />
              )}
            />
          </div>
          {formatErrors(errors) && (
            <ErrorMessage message={formatErrors(errors)} />
          )}
        </SelectDateWrapper>
        <Input
          label="Придумайте пароль:"
          placeholder="Минимум 8 символов"
          name="password"
          id="password"
          type="password"
          errors={errors}
          register={register}
        />
        <Input
          label="Email"
          placeholder="Введите свою почту"
          name="email"
          id="email"
          type="email"
          errors={errors}
          register={register}
        />
        <Button text="СОЗДАТЬ" type="submit" />
      </Form>
    </Wrapper>
  );
};

export { ThirdStep };
