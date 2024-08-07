package com.backend_team.main_backend.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;

public class BadCodeExample {

    public void run() {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter a file path to read:");
        String filePath = scanner.nextLine();
        readFile(filePath);

        System.out.println("Enter a message to write to the log:");
        String message = scanner.nextLine();
        writeLog(message);

        scanner.close();
    }

    // Reads a file and prints its content
    public void readFile(String filePath) {
        File file = new File(filePath);
        FileInputStream fis = null;

        try {
            fis = new FileInputStream(file);
            byte[] data = new byte[(int) file.length()];
            fis.read(data);
            String content = new String(data, "UTF-8");
            System.out.println("File content: " + content);
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                // Improper resource handling (not closing FileInputStream properly)
                fis.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    // Writes a message to a log file
    public void writeLog(String message) {
        PrintWriter writer = null;

        try {
            writer = new PrintWriter("log.txt");
            writer.println(message);
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (writer != null) {
                writer.close();
            }
        }
    }

    // Unused private method (dead code)
    private void unusedMethod() {
        System.out.println("This method is never used.");
    }
}