using System;
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
            // System.Console.WriteLine(consecutiveStr("aaaaaabbcbbbbbcbbbb"));



            // int[] nuts = new int[] { 1, 5, 4, 2, 7, 35 };
            // int[] bolts = new int[] { 35, 2, 4, 5, 1, 7 };
            // Sort(nuts, bolts);
            // System.Console.WriteLine(OneAway("pale", "ple"));
            // System.Console.WriteLine(OneAway("pales", "pale"));
            // System.Console.WriteLine(OneAway("pale", "bale"));
            // System.Console.WriteLine(OneAway("pale", "bake"));

            System.Console.WriteLine(StrCompression("aabcccccaaa"));
            System.Console.WriteLine(reverseWord("Life is Good"));
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
                nuts = left.Concat(right).ToArray();
            }
            for (int i = 0; i < nuts.Length; i++)
            {
                System.Console.WriteLine(nuts[i]);
            }
        }

        static bool OneAway(string str1, string str2)
        {
            int len1 = str1.Length;
            int len2 = str2.Length;
            if (Math.Abs(len1 - len2) > 1) return false;

            string shorter = str1.Length > str2.Length ? str2 : str1;
            string longer = str1.Length > str2.Length ? str1 : str2;
            int idx1 = 0;
            int idx2 = 0;
            bool foundDiff = false;
            while (idx1 < str1.Length && idx2 < str2.Length)
            {
                if (shorter[idx1] != longer[idx2])
                {
                    System.Console.WriteLine(str1[idx1] + " " + str2[idx2]);
                    if (shorter[idx1] != longer[idx2])
                    {
                        if (foundDiff) return false;
                        foundDiff = true;
                        if (shorter.Length == longer.Length)
                        {
                            idx1++;
                        }
                    }
                }
                else
                {
                    idx1++;
                }
                idx2++;
            }
            return true;
        }

        static string StrCompression(string str)
        {
            int count = 1;
            string result = "";
            for (int i = 1; i < str.Length; i++)
            {
                if (str[i - 1] != str[i])
                {
                    result += (str[i - 1] + count.ToString());
                    count = 1;
                }
                else if (i == str.Length - 1)
                {
                    count++;
                    result += (str[i - 1] + count.ToString());
                }
                else
                {
                    count++;
                }
            }
            return result.Length > str.Length ? str : result;
        }


        static string reverseWord(string str)
        {
            int start = 0;
            int end = 0;
            int space = 0;
            string newStr = "";
            for (int i = 0; i < str.Length; i++)
            {
                if (str[i] == ' ')
                {
                    space = i;
                    end = i - 1;
                }
                if (i == str.Length - 1)
                {
                    end = str.Length - 1;
                }
                if(space != 0){
                    for (int j = end; j >= start; j--)
                    {
                        newStr += str[j];
                        if (j == start)
                        {
                            newStr += " ";
                        }
                    }
                    start = space + 1;

                }
            }
            return newStr;
        }
    }
}
