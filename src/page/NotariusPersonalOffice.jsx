import React from "react";

import { useParams } from "react-router-dom";
// import { MessageDialog } from "../components/features/MessageDialog";
import IconTelegram from "../components/icons/iconTelegram";

import IconViber from "../components/icons/IconViber";
import avatar from "../images/avatar.png";
import img_02 from "../images/personal-img-02-1280.jpg";
// import OverviewClients from "../components/widgets/OverviewClients";
import MessageDialogForm from "../components/features/MessageDialogForm";
import Stat from "../components/widgets/Stat";
import Container from "../components/common/Conteiner";

const NotariusPersonalOffice = ({ products }) => {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));
  const {
    region,
    nameObj,
    // kind,
    // contacts,
    fio,
    license,
    areal,
    // city,
    // fullAddress,
    shortAddress,
    // latitude,
    // longitude,
  } = product;

  if (!product) {
    return (
      <main className="p-10 h-screen bg-white">
        <div>
          <h2>Product Not Found</h2>
          <p>The product with id {id} does not exist.</p>
        </div>
      </main>
    );
  }
  //  const map = '!1m12!1m10!1m3!1d81228.9020483256!2d30.578045688476564!3d50.489453380534506!2m1!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1696353021328!5m2!1sru!2sua '
  const map2 =
    "!1m14!1m12!1m3!1d32257.47160492743!2d30.49221469769181!3d50.457551833063484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1695905368028!5m2!1sru!2sua";
  return (
    <main class="min-h-[calc(100vh-200px)] py-10">
      <section class="  bg-white  ">
        <Container>
          {/* xl:grid-cols-[50%_1fr_20%] */}
          <div class="grid lg:grid-cols-[1fr_auto_auto] lg:grid-rows-[auto_auto_auto_auto] xl:grid-cols-[auto_auto_auto] xl:grid-rows-[1fr_auto_auto] ">
            <img
              class="w-[150px] lg:w-[200px] h-auto mx-auto lg:row-span-3 xl:row-span-2"
              width={250}
              height={250}
              src={avatar}
              alt={id}
            />

            <div class="mt-5  lg:pl-10 lg:col-span-2 xl:pi-20 xl:col-auto xl:mt-0">
              <h2 class="text-[24px] px-5 text-center
               lg:text-start font-medium lg:px-0 lg:text-[28px]  
               ">
                {fio}
              </h2>

              <p class="text-base text-center lg:text-start xl:text-[14px] mt-5 lg:mt-2">
                {nameObj}
              </p>
            </div>

            <div class="  lg:col-span-3 lg:col-start-1 lg:row-start-4  
              xl:col-span-3 xl:col-start-1 xl:row-start-3 xl:flex xl:mt-14 xl:border__top">
              <h2 class="mt-10 text-[24px]  font-medium lg:mt-5 xl:basis-[43%] ">
                Опис
              </h2>

              <div class="xl:border__left xl:pl-[56px]">

              
              <p class="text-[14px]  mt-5  xl:bottom__left">
                Нотаріус за операціями з нерухомістю перевіряє документи
                учасників правочину, право власності на нерухомість, організовує
                процедуру здійснення купівлі-продажу та взаєморозрахунків,
                забезпечує гарантії права власності шляхом внесення даних до
                державного реєстру.
              </p>
              <p class="text-[14px]  mt-5">
                Договори купівлі, продажу, дарування, дарча, довіреності,
                генеральні довіреності на квартиру та автомобіль, реєстрація
                підприємств, виїзд дитини, засвідчення підписів, копій.
              </p>
              </div>
            </div>

            <div class="flex  items-center gap-5  mt-10
             lg:col-start-2 lg:row-start-3 lg:pl-10 lg:mt-0  
              xl:col-start-3 xl:row-start-1 xl:items-start xl:justify-end">
              <p class="text-[14px]">Відгуків клієнтів </p>

              <div class=" flex items-center gap-1 ">
                {Array.from({ length: 5 }, (_, index) => index).map(
                  (blockIndex) => (
                    <div key={blockIndex}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          d="M6.86577 1.02865C6.97097 0.704876 7.42903 0.704874 7.53423 1.02865L8.96211 5.42323C9.00916 5.56803 9.14409 5.66606 9.29634 5.66606H13.9171C14.2575 5.66606 14.3991 6.1017 14.1236 6.3018L10.3854 9.0178C10.2622 9.10729 10.2107 9.26591 10.2577 9.41071L11.6856 13.8053C11.7908 14.1291 11.4202 14.3983 11.1448 14.1982L7.40656 11.4822C7.28339 11.3927 7.11661 11.3927 6.99344 11.4822L3.25518 14.1982C2.97976 14.3983 2.60919 14.1291 2.71439 13.8053L4.14227 9.41071C4.18932 9.26591 4.13778 9.10729 4.01461 9.0178L0.276359 6.3018C0.000939608 6.1017 0.142485 5.66606 0.482922 5.66606H5.10366C5.25591 5.66606 5.39084 5.56803 5.43789 5.42323L6.86577 1.02865Z"
                          fill="#582467"
                        />
                      </svg>
                    </div>
                  )
                )}
                <span class=" ml-3 mr-2 rounded text-base   font-normal leading-[1.2] dark:bg-blue-200 dark:text-blue-800">
                  {}
                </span>
              </div>
            </div>

            <div class="flex flex-col gap-3 justify-between mt-5   
             lg:col-start-2 lg:row-start-2 lg:pl-10  
              xl:col-start-2 xl:row-start-2 xl:mt-0">
              <p class="text-[14px]">
                Досвід роботи: <span class="font-semibold ml-2">{"5"}</span>{" "}
                років
              </p>
              <p class="text-[14px]">
                Номер ліцензії:{" "}
                <span class="font-semibold ml-2">{license}</span>{" "}
              </p>
            </div>

            <button
              type="button"
              class="  sm:max-w-max sm:mx-auto mt-10 flex   items-center rounded-full gap-2 justify-center w-full
               p-2 px-10 bg-[#607DBE] hover:bg-[#607DBE]/50 transition-all  border border-slate-500 text-white
               lg:col-start-3 lg:row-start-3  lg:mt-0  
               xl:col-start-3 xl:row-start-2 xl:mr-0
               "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 50 50"
              >
                <path
                  fill="white"
                  d="M2.941 8c-2.941 0-1.47.779 0 1.974L25 26.763l22.059-16.737C48.531 8.831 50 8 47.059 8H2.941zM0 11.946v24.728C0 38.129 1.488 40 2.665 40h44.67C48.513 40 50 38.129 50 36.674V11.946L25 31.021L0 11.946z"
                />
              </svg>
              Зворотній зв’язок
            </button>
          </div>
        </Container>
      </section>
      <section class="pt-10 lg:pt-20">
        <Container>
          <div class=" grid lg:grid-cols-2 gap-10 lg:gap-0">
            <div class="flex flex-col justify-between ">
              <div class=" ">
                <div class="flex flex-col text-base  gap-2">
                  <p>Адреса:</p>
                  <p>
                    {region} {areal}
                  </p>
                  <p>{shortAddress}</p>
                </div>

                <div class="flex justify-center gap-5 mt-5 lg:justify-start lg:mt-10">
                  <IconTelegram />
                  <IconViber />
                </div>
              </div>

              <button
                type="button"
                class="  lg:max-w-max mt-5 flex  sm:max-w-max sm:mx-auto items-center rounded-full gap-2 justify-center w-full 
                p-2 px-10 bg-[#607DBE] hover:bg-[#607DBE]/50 transition-all  border border-slate-500 text-white  
                lg:ml-0"
              >
                Запис на консультацію
              </button>
            </div>
            <iframe
              class=" h-[200px] lg:ml-auto lg:w-[100%] lg:h-[250px] shadow-xl  border border-black/30 xl:h-[300px]"
              //   src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d32257.47160492743!2d30.49221469769181!3d50.457551833063484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1695905368028!5m2!1sru!2sua"
              src={`https://www.google.com/maps/embed?pb=${map2}`}
              width="100%"
              height="100%"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </Container>
      </section>

      <section class="pt-10 lg:pt-20">
        <Container>
          <h3 class="text-[24px] lg:text-3xl font-medium text-neutral-800 text-center">
            Нотаріальні дії
          </h3>

          <div class="grid lg:grid-cols-2  pt-10">
            <div class="relative group/scale overflow-hidden lg:min-h-fit xl:h-[300px]">
              <div class="absolute  left-0 top-0 z-[1] h-full w-[80%] bg-gradient-to-r from-[rgba(0,0,0,0.64)] "></div>
              <picture class="group/card">
                {/* <source
                      media="(min-width:768px) "
                      type="image/jpg"
                      srcSet="
                      /images/   1x,
                      /images/@2x.jpg 2x
                          "
                    /> */}
                <source
                  media="(min-width:768px) "
                  type="image/jpg"
                  srcSet={img_02}
                />

                <img
                  class="duration-250 inset-0 h-full w-full object-cover transition ease-out group-hover/scale:scale-105 group-hover/scale:ease-in"
                  srcSet={img_02}
                  width={250}
                  height={250}
                  src={img_02}
                  alt={id}
                  loading="lazy"
                />
              </picture>

              {/* <img
              class="w-[500px] h-auto "
              width={250}
              height={250}
              src={img_02}
              alt={id}
             
            /> */}
            </div>

            <div class="flex flex-col justify-between mt-5 lg:ml-10 lg:mt-0 xl:pl-20">
              <ul class="marker:text-sky-400 list-disc pl-5 space-y-3">
                <li class="">Довіреності</li>
                <li>Договори</li>
                <li>Завірення</li>
                <li>Держреєстрація</li>
                <li>Спадщина</li>
                <li>Заяви</li>
              </ul>

              <button
                type="button"
                class="lg:max-w-max mt-10 flex sm:max-w-max sm:mx-auto  items-center rounded-full gap-2 justify-center w-full p-2 px-10  bg-[#607DBE] hover:bg-[#607DBE]/50 transition-all  border border-slate-500 text-white "
              >
                Ціни на послуги
              </button>
            </div>
          </div>

          <h3 class="text-[24px] lg:text-3xl font-medium text-neutral-800 text-center mt-10 xl:mt-20">
            Важливі оновлення
          </h3>

          <p class="text-[14px] pt-10 border-b border-b-black/50 pb-10 lg:indent-8 xl:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            necessitatibus voluptatem fuga obcaecati commodi aperiam iusto
            repellat consequatur tempora veritatis numquam corrupti, blanditiis
            aliquam rerum laborum, eaque nemo sunt eum.
          </p>

          <div class="mt-10 ">
            <h4 class="text-xl font-semibold">ГРАФІК РОБОТИ</h4>
            <div class="lg:grid  lg:grid-cols-2">
              <p class="mt-5 ">Нотаріус здійснює нотаріальні дії:</p>

              <ul class="marker:text-sky-400 list-disc pl-5 space-y-3 mt-5 ">
                <li>
                  Робочі дні: з {" 08:00"} до {"19:00"}
                </li>
                <li>
                  Субота: з {" 10:00"} до {"15:00"}
                </li>
                <li>Неділя: {" По телефону"} </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section class="pt-10">
        <Container>
          <h3 class="text-[24px] lg:text-3xl font-medium text-neutral-800 text-center pt-10 border-b border-b-black/50 pb-10 xl:pt-20">
            Вдгуки клієнтів
          </h3>

          <MessageDialogForm />

          <Stat />

          <div class=" pb-10 border-t border-t-black/50">
            <h3 class="text-[24px] lg:text-3xl font-medium  text-neutral-800 text-center pt-10  pb-10">
              Промо-акції
            </h3>

            <p class="text-[14px] lg:indent-8 xl:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
              dolorum suscipit labore deserunt provident numquam autem fugit ea
              temporibus aperiam beatae vero sequi sit, mollitia illum velit
              magni dolorem ullam. At veritatis, excepturi non, enim debitis
              earum quasi ipsum nisi quis iste accusantium?
            </p>
          </div>
        </Container>
      </section>
      <section class=" py-10 ">
        <Container>
          <h3 class="text-[24px] lg:text-3xl font-medium  text-neutral-800 text-center pt-10  pb-10 border-t border-t-black/50 ">
            Корисні ресурси
          </h3>

          <p class="text-[14px] lg:indent-8 xl:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
            dolorum suscipit labore deserunt provident numquam autem fugit ea
            temporibus aperiam beatae vero sequi sit, mollitia illum velit magni
            dolorem ullam. At veritatis, excepturi non, enim debitis earum quasi
            ipsum nisi quis iste accusantium?
          </p>
        </Container>
      </section>
    </main>
  );
};

export default NotariusPersonalOffice;
