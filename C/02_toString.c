#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/* toString：传入数字与转化后的字符串指针，返回字符串长度 */
int toString(int num, char *arr) {
  int length = 0;
  for(int i = num; i > 0; ){
    i /= 10;
    length++;
  }
  for (int i = length - 1; i >= 0; i--) {
    arr[i] = num % 10 + '0';
    num /= 10;
  }
  return length;
}

int main() {
  int num = 642;
  char *ch = (char *)malloc(5);
  int res = toString(num, ch);
  printf("%d\n", res);
  for(int i = 0; i < res; i++) {
    printf("%c", ch[i]);
  }
  free(ch);
}