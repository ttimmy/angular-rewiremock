import * as SparkMD5 from 'spark-md5';

export class Example {
    doSomething() {
        return SparkMD5.hash('Example');
    }
}