import * as z from "zod";

export const eventFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters")
    .max(400, "Description must be less than 400 characters"),
  location: z
    .string()
    .min(3, "Location must be at least 3 characters")
    .max(400, "Location must be less than 400 characters"),
  imageUrl: z.string().url("Image URL must be a valid URL"),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z
    .number()
    .min(0, "Price must be a positive number")
    .max(100000, "Price must be less than EGP 100,000"),
  isFree: z.boolean(),
  url: z.string().url("URL must be a valid URL"),
});
