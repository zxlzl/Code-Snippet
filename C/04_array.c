#include <stdio.h>
#include <stdlib.h>

/* c语言实现动态数组：初始化、取元素、设置元素、添加元素 */
typedef struct {
  int capacity;
  int length;
  int* data;
} IntArray;

void init(IntArray* arr, int length) {
  arr->data = (int *)malloc(4 * length);
  arr->length = 0;
  arr->capacity = length;
}

int get(IntArray* arr, int index) {
  if (index >= arr->length || index < 0){
    return 0;
  }
  return arr->data[index];
}

void set(IntArray* arr, int index, int v) {
  if (index >= arr->length || index < 0){
    return;
  }
  arr->data[index] = v;
}

void push(IntArray* arr, int v) {
  if (arr->length == arr->capacity) {
    arr->capacity *= 2;
    int* a = (int *)malloc(4 * arr->capacity);
    for (int i = 0; i < arr->length; i++) {
      a[i] = arr->data[i];
    }
    free(arr->data);
    arr->data = a;
  }
  arr->data[arr->length] = v;
  arr->length++;
}

int main() {
  IntArray p;
  init(&p,10);
  for (int i = 0; i < 11; i++) {
    push(&p, i);
  }
  printf("data: %d\n",p.data[10]);
  printf("get第1个元素: %d\n",get(&p,1));
  set(&p,10,2);
  printf("get第10个元素: %d\n",get(&p,10));
}