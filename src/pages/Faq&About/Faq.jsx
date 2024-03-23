import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import food from "../../assets/images/Section → 1.jpg.png";
import chevron from "../../assets/icons/chevron-down.svg"
// import chevron from "./chevron-down.svg";
// import food from "./Section → 1.jpg.png";

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        <img
          className={`ml-auto transition-transform duration-200 ease-out ${
            isEnter && "rotate-180"
          }`}
          src={chevron}
          alt="Chevron"
        />
      </>
    )}
    className="border-b"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-4 text-left  ${isEnter && "bg-slate-200"}`,
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out",
    }}
    panelProps={{ className: "p-5" }}
  />
);

export default function Faq() {
  return (
    <div className="mx-auto my-5 px-20">
      <div className="block md:block sm:block lg:flex gap-5">
        <img src={food} alt="" height={400} />
        <div className="mx-2 my-4 border-t w-full ">
          {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
          <Accordion transition transitionTimeout={200}>
            <AccordionItem
              header="What Facilities Does Your Hotel Have?"
              initialEntered
            >
              <p className="text-gray-500 w-full ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                voluptate doloribus eos sunt labore ea enim voluptatem, sequi
                voluptas rem doloremque architecto. Libero, vero natus.
              </p>
            </AccordionItem>

            <AccordionItem header="How Do I Book A Room For My Vacation?">
              <p className="text-gray-500 w-full ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                voluptate doloribus eos sunt labore ea enim voluptatem, sequi
                voluptas rem doloremque architecto. Libero, vero natus.
              </p>
            </AccordionItem>

            <AccordionItem header="How We are best among others?">
              <p className="text-gray-500 w-full ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                voluptate doloribus eos sunt labore ea enim voluptatem, sequi
                voluptas rem doloremque architecto. Libero, vero natus.
              </p>
            </AccordionItem>
            <AccordionItem header="Is There Any Fitness Center In Your Hotel? ">
              <p className="text-gray-500 w-full ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                voluptate doloribus eos sunt labore ea enim voluptatem, sequi
                voluptas rem doloremque architecto. Libero, vero natus.
              </p>
            </AccordionItem>
            <AccordionItem header="What Type Of Room Service Do You Offer?">
              <p className="text-gray-500 w-full ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                voluptate doloribus eos sunt labore ea enim voluptatem, sequi
                voluptas rem doloremque architecto. Libero, vero natus.
              </p>
            </AccordionItem>
            <AccordionItem header="What Facilities Does Your Hotel Have?">
              <p className="text-gray-500 w-full ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                voluptate doloribus eos sunt labore ea enim voluptatem, sequi
                voluptas rem doloremque architecto. Libero, vero natus.
              </p>
            </AccordionItem>
            <AccordionItem header="How Do I Book A Room For My Vacation?">
              <p className="text-gray-500 w-full ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                voluptate doloribus eos sunt labore ea enim voluptatem, sequi
                voluptas rem doloremque architecto. Libero, vero natus.
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
