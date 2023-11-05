/* eslint-disable react/prop-types */
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Select } from "@components/Select";
import { ErrorMessage } from "@components/ErrorMessage";

import {
  formatSelectErrors,
  dayOptions,
  monthOptions,
  yearOptions,
} from "./utils";

import {
  FormWrapper,
  SelectDateWrapper,
  SelectLabel,
  Title,
  TitleWrapper,
  Wrapper,
} from "./styles";

export const ThirdStep = ({ register, errors, control }) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Создать анкету</Title>
        <span>Бистрая регистрация, чтоби перейти к общению</span>
      </TitleWrapper>

      <FormWrapper>
        <Input
          label="Имя"
          placeholder="Введите имя"
          name="name"
          errors={errors["name"]}
          control={control}
          register={register}
          required
        />
        <div>
          <SelectLabel>Дата рождения:</SelectLabel>
          <SelectDateWrapper>
            <Select
              name="day"
              register={register}
              error={formatSelectErrors(errors)}
              options={dayOptions}
              control={control}
            />
            <Select
              name="month"
              register={register}
              error={formatSelectErrors(errors)}
              options={monthOptions}
              control={control}
            />
            <Select
              name="year"
              register={register}
              error={formatSelectErrors(errors)}
              options={yearOptions}
              control={control}
            />
          </SelectDateWrapper>
          {formatSelectErrors(errors) && (
            <ErrorMessage message={formatSelectErrors(errors)} />
          )}
        </div>
        <Input
          label="Придумайте пароль:"
          placeholder="Минимум 8 символов"
          name="password"
          type="password"
          errors={errors["password"]}
          control={control}
          register={register}
          required
        />
        <Input
          label="Email"
          placeholder="Введите свою почту"
          name="email"
          type="email"
          errors={errors["email"]}
          control={control}
          register={register}
          required
        />
        <Button type="submit">СОЗДАТЬ</Button>
      </FormWrapper>
    </Wrapper>
  );
};
