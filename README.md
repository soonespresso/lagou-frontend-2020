# 异步模式

> Asynchronous

异步模式的 API 不会等待这个任务的结束才开始下一个任务，对于耗时操作都是开启过后就立即往后执行下一个任务。耗时任务的后续逻辑一般会通过 回调函数 的方式去定义，在内部耗时任务完成后会自动执行传入的 回调函数。异步模式对于 JavaScript 非常重要，因为没有这种模式，单线程的 JavaScript 语言就无法同时处理大量耗时的任务。

对于开发者而言，单线程模式下的异步最大的难点就是代码执行的顺序并不会像同步代码一样通俗易懂，因为它的执行顺序相对会比较跳跃。

实现原理：

- 消息队列
- 事件循环

![asynchronous-programming-01](assets/asynchronous-programming-01.png)

![asynchronous-programming-02](assets/asynchronous-programming-02.png)

![asynchronous-programming-03](assets/asynchronous-programming-03.png)

![asynchronous-programming-04](assets/asynchronous-programming-04.png)

![asynchronous-programming-05](assets/asynchronous-programming-05.png)

![asynchronous-programming-06](assets/asynchronous-programming-06.png)

![asynchronous-programming-07](assets/asynchronous-programming-07.png)

![asynchronous-programming-08](assets/asynchronous-programming-08.png)

![asynchronous-programming-09](assets/asynchronous-programming-09.png)

![asynchronous-programming-10](assets/asynchronous-programming-10.png)

![asynchronous-programming-11](assets/asynchronous-programming-11.png)

![asynchronous-programming-12](assets/asynchronous-programming-12.png)

![asynchronous-programming-13](assets/asynchronous-programming-13.png)

![asynchronous-programming-14](assets/asynchronous-programming-14.png)

![asynchronous-programming-15](assets/asynchronous-programming-15.png)

![asynchronous-programming-16](assets/asynchronous-programming-16.png)

![asynchronous-programming-17](assets/asynchronous-programming-17.png)

![asynchronous-programming-18](assets/asynchronous-programming-18.png)

![asynchronous-programming-19](assets/asynchronous-programming-19.png)

![asynchronous-programming-20](assets/asynchronous-programming-20.png)

![asynchronous-programming-21](assets/asynchronous-programming-21.png)

![asynchronous-programming-22](assets/asynchronous-programming-22.png)

![asynchronous-programming-23](assets/asynchronous-programming-23.png)

![asynchronous-programming-24](assets/asynchronous-programming-24.png)

![asynchronous-programming-25](assets/asynchronous-programming-25.png)

![asynchronous-programming-26](assets/asynchronous-programming-26.png)

以此类推...

如果调用栈是一个正在执行的工作表，那么消息队列就是一个代办的工作表。JS 引擎就是先做完调用栈中的任务，然后再通过事件循环从消息队列中再获取任务出来，继续执行，以此类推。整个过程可以随时往消息队列里放入新的任务。这些任务在消息队列里排队等待事件循环。

![asynchronous-programming-all](assets/asynchronous-programming-all.png)

**注意**：执行 JavaScript 代码 是单线程的，但是浏览器并不是，所以 JavaScript 调用的某些内部 API 可能并不是单线程的。所以说所谓的同步、异步不是指写代码的方式，而是说 运行环境提供的 API 是以同步模式，还是以异步模式的方式工作。

