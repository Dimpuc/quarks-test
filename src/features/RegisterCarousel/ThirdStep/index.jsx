/* eslint-disable react/prop-types */
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input, InputPassword } from "../../../common/components/Input";
import { Button } from "../../../common/components/Button";
import { Select } from "../../../common/components/Select";
import { ErrorMessage } from "../../../common/components/ErrorMessage";

import { schemaRegister } from "./schema";
import {
  formatSelectErrors,
  dayOptions,
  monthOptions,
  yearOptions,
} from "./utils";

import {
  Form,
  SelectDateWrapper,
  SelectLabel,
  Title,
  TitleWrapper,
  Wrapper,
} from "./styles";

const ThirdStep = ({ handleRegister }) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaRegister),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handelShowPassword = () => setShowPassword(!showPassword);

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
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              label="Имя"
              placeholder="Введите имя"
              id="name"
              type="text"
              errors={errors["name"]}
              register={register}
              value={field.value}
              inputRef={field.ref}
              required
              {...field}
            />
          )}
        />

        <div>
          <SelectLabel>Дата рождения:</SelectLabel>
          <SelectDateWrapper>
            <Controller
              name="day"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  register={register}
                  error={formatSelectErrors(errors)}
                  inputRef={field.ref}
                  options={dayOptions}
                  value={field.value}
                />
              )}
            />
            <Controller
              name="month"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  register={register}
                  error={formatSelectErrors(errors)}
                  inputRef={field.ref}
                  options={monthOptions}
                  value={field.value}
                />
              )}
            />
            <Controller
              name="year"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  register={register}
                  error={formatSelectErrors(errors)}
                  inputRef={field.ref}
                  options={yearOptions}
                  value={field.value}
                />
              )}
            />
          </SelectDateWrapper>
          {formatSelectErrors(errors) && (
            <ErrorMessage message={formatSelectErrors(errors)} />
          )}
        </div>

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <InputPassword
              label="Придумайте пароль:"
              placeholder="Минимум 8 символов"
              id="password"
              type={showPassword ? "text" : "password"}
              errors={errors["password"]}
              register={register}
              inputRef={field.ref}
              showPassword={handelShowPassword}
              value={field.value}
              required
              {...field}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              label="Email"
              placeholder="Введите свою почту"
              id="email"
              type="email"
              errors={errors["email"]}
              register={register}
              value={field.value}
              inputRef={field.ref}
              required
              {...field}
            />
          )}
        />
        <Button text="СОЗДАТЬ" type="submit" />
      </Form>
    </Wrapper>
  );
};

export { ThirdStep };
