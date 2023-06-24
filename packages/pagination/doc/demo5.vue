<!-- html -->
<template>
  <i-pagination
    :total="200"
    :current="1"
    :pageSize="10"
    :maxSize="8"
  ></i-pagination>
  <i-pagination
    :total="1000"
    :current="1"
    :pageSize="20"
    :maxSize="20"
  ></i-pagination>
</template>