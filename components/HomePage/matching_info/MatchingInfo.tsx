'use client';

import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import { Input } from '../../ui/input';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';
import { ageList, religion } from '../../../constants/constants';
import { ScrollArea } from '../../ui/scroll-area';
import { Separator } from '@radix-ui/react-select';
const formSchema = z.object({
  // username: z.string().min(2, {
  //   message: 'Username must be at least 2 characters.',
  // }),
  gender: z.string(),
  fromAge: z.string(),
  relegion: z.string(),
  toAge: z.string(),
});
const MatchingInfo = () => {
  /* ageListFiled */
  const listOfAged = ageList.map((item, index) => {
    return (
      <SelectItem
        value={item.name}
        key={index}
      >
        {item.value}
      </SelectItem>
    );
  });
  const listofReligion = religion.map((item, index) => {
    return (
      <SelectItem
        value={item.name}
        key={index}
      >
        {item.name}
      </SelectItem>
    );
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gender: '',
      fromAge: '',
      toAge: '',
      relegion: '',
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className=''>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex space-x-2 justify-center items-center h-full'
        >
          {/* GENDER SELECTIONS */}
          <FormField
            control={form.control}
            name='gender'
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel className='text-white'>Matching for</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className='w-[180px]'>
                        <SelectValue placeholder='Select Gender' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='male'>Male</SelectItem>
                        <SelectItem value='female'>Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className='text-white' />
                </FormItem>
              </>
            )}
          />

          {/* AGED SELECTION */}
          <FormField
            control={form.control}
            name='toAge'
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel className='text-white'>aged</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className='w-[180px]'>
                        <SelectValue placeholder='Select Age' />
                      </SelectTrigger>
                      <SelectContent>
                        <ScrollArea className='h-72 w-48 rounded-md border'>
                          {listOfAged}
                        </ScrollArea>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className='text-white' />
                </FormItem>
              </>
            )}
          />
          <div className='mt-[30px] text-white'>TO</div>
          <div className='mt-[30px]'>
            <FormField
              control={form.control}
              name='fromAge'
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className='w-[180px]'>
                          <SelectValue placeholder='Select Age' />
                        </SelectTrigger>
                        <SelectContent>
                          <ScrollArea className='h-72 w-48 rounded-md border'>
                            {listOfAged}
                          </ScrollArea>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className='text-white' />
                  </FormItem>
                </>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='relegion'
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel className='text-white'>Select Religion</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className='w-[180px]'>
                        <SelectValue placeholder='Select Religion' />
                      </SelectTrigger>
                      <SelectContent>
                        <ScrollArea className='h-48 w-48 rounded-md border'>
                          {listofReligion}
                        </ScrollArea>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className='text-white' />
                </FormItem>
              </>
            )}
          />
          {/* <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel className='text-white'>Username</FormLabel>
                  <FormControl>
                    <Input
                      type='text'
                      placeholder='placeholder'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-white' />
                </FormItem>
              </>
            )}
          /> */}

          {/* <FormField
            control={form.control}
            name='file'
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel className='text-white'>file</FormLabel>
                  <FormControl>
                    <Input
                      type='file'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-white' />
                </FormItem>
              </>
            )}
          /> */}
          <div className='mt-[30px]'>
            <Button
              type='submit'
              className='bg-red-300 hover:bg-white hover:text-red-300'
            >
              Next Match
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default MatchingInfo;
