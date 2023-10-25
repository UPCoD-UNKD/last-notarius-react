import React from "react";

import { useParams } from "react-router-dom";
// import { MessageDialog } from "../components/features/MessageDialog";
import IconTelegram from "../components/icons/iconTelegram";

import IconViber from "../components/icons/IconViber";
import avatar from "../images/avatar-02.png";
import img_02 from "../images/personal-img-02-1280.jpg";
// import OverviewClients from "../components/widgets/OverviewClients";
import MessageDialogForm from "../components/features/MessageDialogForm";
import Stat from "../components/widgets/Stat";
import Container from "../components/common/Conteiner";

const NotariusPersonalOffice = ({ notaries }) => {
  const { id } = useParams();

  const notarius = notaries.find((p) => p.id === Number(id));
  if (!notarius) {
    return (
      <main className="p-10 h-screen bg-white">
        <div>
          <h2>Product Not Found</h2>
          <p>The product with id {id} does not exist.</p>
        </div>
      </main>
    );
  }
  
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
  } = notarius;


  //  const map = '!1m12!1m10!1m3!1d81228.9020483256!2d30.578045688476564!3d50.489453380534506!2m1!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1696353021328!5m2!1sru!2sua '
  const map2 =
    "!1m14!1m12!1m3!1d32257.47160492743!2d30.49221469769181!3d50.457551833063484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1695905368028!5m2!1sru!2sua";
  return (
    <main class="min-h-[calc(100vh-200px)] py-10 mt-[-72px]">
      <section class="  bg-white  ">
        <Container>
          <div class="lg:flex">
            <img
              class="w-[150px] lg:w-[158px] h-auto mx-auto lg:h-[158px] "
              width={158}
              height={158}
              src={avatar}
              alt={id}
            />

            <div class="pl-10">
              <div class="mt-5  flex  xl:mt-0">
                <h2
                  class="text-[24px] px-5 
                font-medium lg:px-0 lg:text-[28px]  
               "
                >
                  {fio}
                </h2>

                <button
                  type="button"
                  class="  sm:max-w-max sm:mx-auto mt-10 flex   items-center rounded-full gap-2 justify-center w-full
               p-2 px-10 bg-accent1 hover:bg-[#607DBE]/50 transition-all  border border-slate-500 text-white
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

              <div class="flex mt-5 lg:mt-2 gap-5">
                <p class="text-base w-[150px]  xl:text-[14px] ">{nameObj}</p>

                <div
                  class="flex   flex-col gap-5  mt-10
               lg:mt-0  
               "
                >
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

                <div
                  class="flex flex-col gap-3 justify-between mt-5   
              
              xl:mt-0"
                >
                  <p class="text-[14px]">
                    Досвід роботи: <span class="font-semibold ml-2">{"5"}</span>{" "}
                    років
                  </p>
                  <p class="text-[14px]">
                    Номер ліцензії:{" "}
                    <span class="font-semibold ml-2">{license}</span>{" "}
                  </p>
                </div>
              </div>

              <div class="   ">
                <h2 class="mt-10 text-[24px]  font-medium lg:mt-5 xl:basis-[43%] ">
                  Опис
                </h2>

                <p class="text-[14px]  mt-5 ">
                  Нотаріус за операціями з нерухомістю перевіряє документи
                  учасників правочину, право власності на нерухомість,
                  організовує процедуру здійснення купівлі-продажу та
                  взаєморозрахунків, забезпечує гарантії права власності шляхом
                  внесення даних до державного реєстру.
                </p>
                <p class="text-[14px]  mt-5">
                  Договори купівлі, продажу, дарування, дарча, довіреності,
                  генеральні довіреності на квартиру та автомобіль, реєстрація
                  підприємств, виїзд дитини, засвідчення підписів, копій.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section class="py-10 lg:py-20 ">
        <Container>
          <div class=" grid lg:grid-cols-2 gap-10 lg:gap-0  ">
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
                p-2 px-10 bg-accent1 hover:bg-accent1/70 transition-all  text-white  
                lg:ml-0"
              >
                Запис на консультацію
              </button>
            </div>
            <iframe
              class=" h-[200px] lg:ml-auto lg:w-[100%] lg:h-[250px]   border border-black/30 "
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

      <section class="pb-[100px]">
        <Container class="border__top">
          <h3 class="text-[24px] lg:text-3xl font-medium text-neutral-800 text-center pt-7 lg:text-end lg:mr-[200px]">
            Нотаріальні дії
          </h3>

          <div class="grid lg:grid-cols-2  pt-10">
            <div class="relative group/scale overflow-hidden lg:min-h-fit ">
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
              <ul class="marker:text-black/30 list-disc  pl-5 space-y-3">
                <li class="">Довіреності</li>
                <li>Договори</li>
                <li>Завірення</li>
                <li>Держреєстрація</li>
                <li>Спадщина</li>
                <li>Заяви</li>
              </ul>

              <button
                type="button"
                class="lg:max-w-max mt-10 flex sm:max-w-max sm:mx-auto  items-center rounded-full gap-2 justify-center w-full p-2 px-10  bg-accent1 hover:bg-accent1/50 transition-all   text-white lg:mr-0"
              >
                Ціни на послуги
              </button>
            </div>
          </div>

          <div class="lg:flex mt-10 xl:mt-20 border__top pt-5 lg:pt-10">
            <h3 class="text-[24px] lg:text-3xl font-medium text-neutral-800 text-center  lg:text-start lg:basis-[25%]">
              Важливі оновлення
            </h3>
            <div class="lg:basis-[75%] lg:pl-10">
              <p class="text-[14px] pt-10   lg:indent-8 xl:text-base lg:pt-0 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                necessitatibus voluptatem fuga obcaecati commodi aperiam iusto
                repellat consequatur tempora veritatis numquam corrupti,
                blanditiis aliquam rerum laborum, eaque nemo sunt eum.
              </p>

              <p class="text-[14px] pt-5 pb-10  xl:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                necessitatibus voluptatem fuga obcaecati commodi aperiam iusto
                repellat consequatur tempora veritatis numquam corrupti,
                blanditiis aliquam rerum laborum, eaque nemo sunt eum.
              </p>
            </div>
          </div>

          <div class="mt-10 ">
            <h4 class="text-xl font-semibold">ГРАФІК РОБОТИ</h4>
            <div class="lg:grid  lg:grid-cols-2">
              <p class="mt-5 ">Нотаріус здійснює нотаріальні дії:</p>

              <ul class="marker:text-black/30 list-disc pl-5 space-y-3 mt-5 ">
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

      <section
        class=" w-full px-5 h-[290px]  flex items-center justify-center
  bg-pesonal-office    bg-cover bg-center bg-no-repeat 
   "
      >
        {/* <div class="   absolute   top-0    w-full   inset-0  bg-black/[57%] "></div> */}
        <div class="flex flex-col justify-center gap-10 z-[1]">
          <h1 class="text-[32px] font-semibold text-white">
            РЕЄСТР НОТАРІУСІВ УКРАЇНИ
          </h1>
          <p class="text-white text-[20px] font-semibold text-center">
            Legal solution
          </p>
        </div>
      </section>

      <section class="pt-10 lg:pt-20">
        <Container class="">
          <h3 class="text-[24px] lg:text-3xl font-medium text-neutral-800 text-center ">
            Вдгуки клієнтів
          </h3>

          <MessageDialogForm />

          <Stat />

          
          <div class="lg:flex mt-10 xl:mt-20 border__top pt-5 lg:pt-10">
            <h3 class="text-[24px] lg:text-3xl font-medium text-neutral-800 text-center  lg:text-start lg:basis-[25%]">
            Промо-акції
            </h3>
            <div class="lg:basis-[75%] lg:pl-10">
              <p class="text-[14px] pt-10   lg:indent-8 xl:text-base lg:pt-0 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                necessitatibus voluptatem fuga obcaecati commodi aperiam iusto
                repellat consequatur tempora veritatis numquam corrupti,
                blanditiis aliquam rerum laborum, eaque nemo sunt eum.
              </p>

              <p class="text-[14px] pt-5 pb-10  xl:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                necessitatibus voluptatem fuga obcaecati commodi aperiam iusto
                repellat consequatur tempora veritatis numquam corrupti,
                blanditiis aliquam rerum laborum, eaque nemo sunt eum.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section class=" py-10 ">
        <Container>
          
        <div class="lg:flex mt-10 xl:mt-20 border__top pt-5 lg:pt-10">
            <h3 class="text-[24px] lg:text-3xl font-medium text-neutral-800 text-center  lg:text-start lg:basis-[25%]">
            Корисні ресурси
            </h3>
            <div class="lg:basis-[75%] lg:pl-10">
              <p class="text-[14px] pt-10   lg:indent-8 xl:text-base lg:pt-0 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                necessitatibus voluptatem fuga obcaecati commodi aperiam iusto
                repellat consequatur tempora veritatis numquam corrupti,
                blanditiis aliquam rerum laborum, eaque nemo sunt eum.
              </p>

              <p class="text-[14px] pt-5 pb-10  xl:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                necessitatibus voluptatem fuga obcaecati commodi aperiam iusto
                repellat consequatur tempora veritatis numquam corrupti,
                blanditiis aliquam rerum laborum, eaque nemo sunt eum.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default NotariusPersonalOffice;
