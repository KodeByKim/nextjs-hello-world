"use client";

import { Button } from "@/components/ui/Button";
import { TextInput } from "@/components/ui/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Flex } from "@radix-ui/themes";
import { useCallback } from "react";
import { Field, FieldError, useForm } from "react-hook-form";
import isMobilePhone from "validator/es/lib/isMobilePhone";
import { object, string, infer as zInfer } from "zod";
import { ProjectBudgetRadioList } from "./ProjectBudgetRadioList";
import { StageOfLifeRadioList } from "./StageOfLifeRadioList";

export const ContactSchema = object({
  name: string().min(1, "Name is required"),
  email: string().email(),
  companyName: string().min(1, "Company Name is required"),
  phoneNumber: string()
    .min(1, "Phone Number is required")
    .refine((data) => {
      return isMobilePhone(data, "en-US");
    }, "Invalid phone number"),
  stageOfLife: string().min(1, "Stage of Life is required"),
  projectBudget: string().min(1, "Project Budget is required"),
});

export type ContactSchemaType = zInfer<typeof ContactSchema>;

export const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      projectBudget: "100k-500k",
      stageOfLife: "Startup",
    },
  });

  const submitHandler = useCallback(() => {
    alert("DEVNOTE: Submit form data to backend");
  }, []);

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Flex direction={"column"} gap={"6"} className="w-[468px]">
        <TextInput
          className="w-[434px] tracking-[0.4rem]"
          label="Name"
          error={errors?.name}
          placeholder="Albert Einstein"
          {...register("name")}
        />
        <TextInput
          className="w-[434px] tracking-[0.4rem]"
          label="Email"
          error={errors?.email}
          placeholder="Albert@moxielabs.co"
          {...register("email")}
        />
        <TextInput
          className="w-[434px] tracking-[0.4rem]"
          label="Company Name"
          error={errors?.companyName}
          placeholder="Moxie Labs"
          {...register("companyName")}
        />
        <TextInput
          className="w-[434px] tracking-[0.4rem]"
          label="Phone Number"
          error={errors?.phoneNumber}
          placeholder="777-777-777"
          {...register("phoneNumber")}
        />
        <Flex justify={"between"}>
          <StageOfLifeRadioList
            register={register}
            error={errors?.stageOfLife}
          />
          <ProjectBudgetRadioList
            register={register}
            error={errors?.projectBudget as FieldError}
          />
        </Flex>
        <Box>
          <Button className="px-[60px]">Submit</Button>
        </Box>
      </Flex>
    </form>
  );
};
