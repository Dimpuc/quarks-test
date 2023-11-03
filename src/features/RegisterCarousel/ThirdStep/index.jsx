/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../../../common/components/Input";
import { Button } from "../../../common/components/Button";
import { SelectDate } from "../../../common/components/Select";
import { schemaRegister } from "./schema";

import { Form, Title, TitleWrapper, Wrapper } from "./styles";

const ThirdStep = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schemaRegister),
  });

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
        <SelectDate />
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
