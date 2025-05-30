"use client";

import { Button } from "@/components/ui/button";
import useApiKeyStore from "@/stores/api-key";
import { useSyncApiKeyFromLocalStorage } from "@/stores/api-key";
import { Settings as SettingsIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";

const settingsFormSchema = z.object({
  apiKey: z.string().min(1, { message: "API Key is required" }),
});

export function Settings() {
  useSyncApiKeyFromLocalStorage();
  const { apiKey, setApiKey } = useApiKeyStore();
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof settingsFormSchema>>({
    resolver: zodResolver(settingsFormSchema),
    defaultValues: {
      apiKey,
    },
  });

  // Sync apiKey from localStorage to form
  useEffect(() => {
    form.reset({ apiKey });
  }, [apiKey, form]);

  function onSubmit(values: z.infer<typeof settingsFormSchema>) {
    setApiKey(values.apiKey);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="cursor-pointer" variant="secondary" size="icon">
          <SettingsIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Enter your Gemini API key below. You can find your API key in{" "}
            <a
              href="https://aistudio.google.com/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Google AI Studio
            </a>
            .
          </DialogDescription>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="apiKey"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="API Key" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="cursor-pointer" type="submit">
                Save
              </Button>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
