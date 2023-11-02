import { FeedbackBlock } from "@components/FeedbackBlock";
import UsersIcon from "../assets/icons/photo.svg";

function App() {
  return (
    <>
      <FeedbackBlock
        icon={<img src={UsersIcon} />}
        text="
         Хочу поделиться своей историей. Познакомилась с Игорем на вашем сайте,
         совпали интересы - мы вдвоем обожаем путешествия и новые страны. Так
         начали обсуждать всякое и решили: а почему бы не провести отпуск вдвоем?
         Выбрали Занзибар и впервые увидели друг друга только в аэропорту ✈ Было
         волнительно, но все совпало! Мы не пара, но друзья по путешествиям. А
         там, кто знает... 😎
      "
        usersName="Лиля и Игорь"
        data="3 недели назад"
      />
    </>
  );
}

export default App;
