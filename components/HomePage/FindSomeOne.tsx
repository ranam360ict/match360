'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const FindSomeOne = () => {
  return (
    <div>
      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight flex justify-center'>
        Find Your Best Match
      </h3>
      <Card className='w-[350px]'></Card>
    </div>
  );
};

export default FindSomeOne;
