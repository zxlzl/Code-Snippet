#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/* indexOf：传入字符串指针，返回调用s2在s1中第一次出现的索引值，没有返回-1 */
int indexOf(char s1[], char s2[]) {
  int position = 0;
  while (*s1 != '\0') {
    for (int i = 0; *(s1 + i) == *(s2 + i); i++) {
      if (*(s2 + i + 1) == '\0') {
        return position;
      }
    }
    s1++;
    position++;
  }
  return -1;
}

int main() {
  int p = indexOf("ppp", "pp");
  printf("返回值: %d\n", p);
}