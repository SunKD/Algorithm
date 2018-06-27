﻿using System;
using System.Collections.Generic;
using System.Linq;

namespace c_
{
    class Program
    {
        static void Main(string[] args)
        {
            // countAlpabet("Hi This is sun Davey");
            // System.Console.WriteLine("this is Anagram testing");
            // System.Console.WriteLine(isAnagram("abcd", "acbd"));
            // System.Console.WriteLine(isAnagram("abcd", "abbcd"));

            // string [] input = {"kumar", "Mishra" , "Hello" , "Hi", "good", "day", "Bye"};
            // printOutput(input);
            // System.Console.WriteLine(ReverseString("hello"));
            System.Console.WriteLine(consecutiveStr("aaaaaabbcbbbbbcbbbb"));



            int[] nuts = new int[] { 1, 5, 4, 2, 7, 35 };
            int[] bolts = new int[] { 35, 2, 4, 5, 1, 7 };
            Sort(nuts, bolts);
        }

        static void countAlpabet(String input)
        {
            int[] numCount = new int[26];
            input = input.ToLower();
            for (int i = 0; i < input.Length; i++)
            {
                if (input[i] != ' ')
                {
                    int idx = input[i] - 'a';
                    numCount[idx]++;

                }
            }
            // numCount.ToString();
            printResult(numCount);
        }

        static void printResult(int[] numCount)
        {
            for (int i = 0; i < numCount.Length; i++)
            {
                System.Console.WriteLine((char)(i + 'a') + ": " + numCount[i]);
            }
        }

        static bool checkSum(int[] arr, int num)
        {
            for (int i = 0; i < arr.Length; i++)
            {
                for (int j = 0; j < arr.Length; j++)
                {
                    if (i != j)
                    {
                        if (arr[i] + arr[j] == num)
                        {
                            return true;
                        }
                    }
                }
            }
            return false;
        }

        static bool isAnagram(String st1, String st2)
        {
            char[] char1 = st1.ToCharArray();
            char[] char2 = st2.ToCharArray();
            Array.Sort(char1);
            Array.Sort(char2);
            return new string(char1) == new string(char2);
        }

        static void printOutput(String[] arr)
        {
            int max = arr[0].Length;
            for (int i = 1; i < arr.Length; i++)
            {
                if (arr[i].Length > max)
                {
                    max = arr[i].Length;
                }
            }
            max += 2;
            System.Console.WriteLine(new string('*', max));
            for (int i = 0; i < arr.Length; i++)
            {
                System.Console.WriteLine(String.Format("*{0, -" + max + "}*", arr[i]));
            }
            System.Console.WriteLine(new string('*', max));
        }

        static string ReverseString(string s)
        {
            char[] arr = s.ToCharArray();
            Array.Reverse(arr);
            return new string(arr);
        }

        static char consecutiveStr(string str)
        {
            Dictionary<char, int> dic = new Dictionary<char, int>();
            int count = 1;
            for (int i = 0; i < str.Length - 1; i++)
            {
                if (str[i + 1] == str[i])
                {
                    count++;
                }
                else
                {
                    if (dic.ContainsKey(str[i]))
                    {
                        if (dic[str[i]] < count)
                        {
                            dic[str[i]] = count;
                            count = 1;
                        }
                        else
                        {
                            count = 1;
                            continue;
                        }

                    }
                    else
                    {
                        dic.Add(str[i], count);
                        count = 1;

                    }
                }
            }
            System.Console.WriteLine(dic);
            return dic.FirstOrDefault(x => x.Value == dic.Values.Max()).Key;
        }


        public static void Sort(int[] nuts, int[] bolts)
        {

            // int pivot = 0;
            for (int i = 0; i < nuts.Length; i++)
            {
                int pivot = bolts[i];
                List<int> left = new List<int>();
                List<int> right = new List<int>();
                for (int j = 0; j < nuts.Length; j++)
                {
                    if (nuts[j] < pivot)
                    {
                        left.Add(nuts[j]);
                    }
                    else
                    {
                        right.Add(nuts[j]);
                    }
                }
                // left.Add(pivot);
                nuts = left.Concat(right).ToArray();
                // System.Console.WriteLine(nuts);
            }
            for (int i = 0; i < nuts.Length; i++)
            {
                System.Console.WriteLine(nuts[i]);
            }

        }

    }
}
