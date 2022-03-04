## A4 Spring 2022 Webinar Series

# 2. Introduction to Operating Systems
##### Host By Angold Wang 03/04/2022

## [1. Introduction](https://a4org.github.io/os/docs/lectures/1Introduction.html)

## [2. Virtual Memory](https://a4org.github.io/os/docs/lectures/1Introduction.html)

## 3. xv6

### 1. entry 
**`kernel/entry.s`**
* **set up a stack so that `xv6` can run C code**
* **The stack on RISC-V grows down, `entry` code set `%sp` to be `stack0 + 4096`**

### 2. start
**`kernel/start.c`**
* **Still in machine mode**
* **Init the clock hardware**
* **Sets the return address to `main` by writing `main`'s address into the reigiter `mepc`**

### 3. main
**`kernel/main.c`**
* **Initial several devices and subsystems (page table...)**
* **creates the first process by calling `userinit`.**

### 4. userinit
**`kernel/proc.c`**
* **execute a small program written in RISC-V assembly, make the first system call in xv6 (`exec('/init');`)**
* **the `initcode` located in `user/initcode.S` loads the number for the `exec` system call, `SYS_EXEC` into register a7, then calls `ecall` to re-enter the kernel.**

### 5. init
**`user/init.c`**
* **The initial user-process**
* **open the file descriptor**
* **fork a child process to execute shell**
